import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Menu, MenuItem } from "@mui/material";

const AdminNavbar = (props) => {
    const {open, handleDrawerOpen, AppBar} = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const logout = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
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
            <h3 className="text-2xl font-medium font-body text-white">
              Hi, Administrator
            </h3>
            <Box className="flex item-center gap-3 ">
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cj9fuTsqPCwvnG-IqN3HAVb9jMa0BD5uxQ&usqp=CAU"
            />
              <IconButton
                aria-controls={logout ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={logout ? 'true' : undefined}
                onClick={handleClick}
              >
                <ArrowDropDownIcon />
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
                <MenuItem onClick={handleClose}>Log out</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {/* NAVBAR END */}
    </>
  );
};

export default AdminNavbar;
