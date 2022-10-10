import React, {useState, useEffect, useContext} from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";

import AdminSidebar from "../SideBar/Sidebar";
import AdminNavbar from "../Navbar/Navbar";

import { GlobalContext } from "../../../../core/context/GlobalContext";

import { useHistory } from "react-router-dom";
import { SystemContainer, SystemGrid, ApplicationCard } from "../../../../components";
import { CardContent } from "@mui/material";
import { localstoragehelper } from "../../../../core/utils/storage";

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function HomeFieldDDashboard() {
  const globalcontextValues = useContext(GlobalContext)
  const { token, tokenScanned, settings } = globalcontextValues
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const key = localstoragehelper.load('key_identifier')

  const history = useHistory()

  useEffect(() => {
    window.addEventListener('resize' , () => {
      return window.innerWidth < 1024 ? setOpen(false) : setOpen(true)
  })
  },[])

  // useEffect(() => {
  //   const tempAllFieldSelected = [...settings];
  //   const tempFieldSelected = { ...tempAllFieldSelected[0] };
  //   if(key == 'unknown1'){
  //     history.push(tempFieldSelected.router_obj.login)
  //   }else{
  //     tokenScanned(0)
  //   }
  // }, [key])

  const signoutRouteDestroy = () => {
    const tempAllFieldSelected = [...settings];
    const tempFieldSelected = { ...tempAllFieldSelected[0] };
    history.push(tempFieldSelected.router_obj.home)
  }
  
  const handleClick = () => {
    setDropDown(!dropDown);
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className='flex'>
      <CssBaseline />
     <AdminNavbar signoutRouteDestroy={signoutRouteDestroy} token={token} open={open} handleDrawerOpen={handleDrawerOpen} AppBar={AppBar} />
      <AdminSidebar open={open} handleDrawerClose={handleDrawerClose} theme={theme} handleClick={handleClick} dropDown={dropDown} Drawer={Drawer} DrawerHeader={DrawerHeader}/>
      {/* CONTENT */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='flex items-center justify-center h-[100vh]'>
        <DrawerHeader />
       
      </Box>
       <SystemContainer
       style={{marginTop: '100px'}}
        max={'xl'}
        >
          <SystemGrid 
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            xs={0}
            md={3}
            GridItems = {
              [
                {
                  childrenId: 1,
                  children : <ApplicationCard 
                    children={
                      <CardContent>
                        <h3>Users</h3>
                      </CardContent>
                    }
                  />
                },
                {
                  childrenId: 2,
                  children : <ApplicationCard 
                    children={
                      <CardContent>
                        <h3>Users</h3>
                      </CardContent>
                    }
                  />
                },
                {
                  childrenId: 3,
                  children : <ApplicationCard 
                    children={
                      <CardContent>
                        <h3>Users</h3>
                      </CardContent>
                    }
                  />
                },
                {
                  childrenId: 4,
                  children : <ApplicationCard 
                    children={
                      <CardContent>
                        <h3>Users</h3>
                      </CardContent>
                    }
                  />
                }
              ]
            }
          />
        </SystemContainer>
    </Box>
  );
}
