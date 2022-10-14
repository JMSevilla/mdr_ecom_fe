import React, {useRef, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { Menu, MenuItem } from "@mui/material";
import { SystemDialog, SystemBackdrop } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { SIGNOUT_PROCESS } from "../../../../core/redux/reducers/Login/login";

const AdminNavbar = (props) => {
    const {open, handleDrawerOpen, AppBar, token, signoutRouteDestroy} = props;
    const dispatch = useDispatch()
    const getSelectors = (state) => ({signout_message : state.login})
    const { signout_message } = useSelector(getSelectors)
    const baseRef = {
      logoutRef : useRef(signout_message)
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [backdrop , setBackdrop] = useState(false)
    const logout = Boolean(anchorEl);
    const [Dialogopen, setDialogOpen] = React.useState(false)
    useEffect(() => {
      baseRef.logoutRef.current = signout_message
    }, [signout_message])
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleSignoutDialog = () => {
      setDialogOpen(!Dialogopen)
    }
    const handleSignout = () => {
      setDialogOpen(false)
      setBackdrop(!backdrop)
      let obj = {
        userID : token.userID == null || undefined ? token.data[0].userID : token.userID,
        token: token.token == null || undefined ? token.data[0].token : token.token
      }
      dispatch(SIGNOUT_PROCESS(obj))
      setTimeout(() => {
        const res = baseRef.logoutRef.current.signout_message
        if(res.message == 'signout_success'){
          localStorage.removeItem('key_identifier')
          signoutRouteDestroy()
        }
      },3000)
    }
  return (
    <>
      {/* NAVBAR START*/}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box className="flex items-center justify-between w-full">
            <h3 className="text-xl font-medium font-body text-white">
              Hi, Administrator
            </h3>
            <Box className="flex item-center gap-3 ">
      
              <IconButton
                aria-controls={logout ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={logout ? 'true' : undefined}
                onClick={handleClick}
              >
              <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cj9fuTsqPCwvnG-IqN3HAVb9jMa0BD5uxQ&usqp=CAU"
            />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={logout}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem data-testid={'btnsignouttest'} onClick={handleSignoutDialog}>Log out</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <SystemDialog 
      open={Dialogopen}
      title={'Administrator Signout'}
      children={'Are you sure you want to sign out ? '}
      fullWidth={true}
      buttonCancelText={'CANCEL'}
      buttonAgreeText={'SIGNOUT'}
      handleClose={handleSignout}  
      />
      <SystemBackdrop 
      open={backdrop}
      />
      {/* NAVBAR END */}
    </>
  );
};

export default AdminNavbar;
