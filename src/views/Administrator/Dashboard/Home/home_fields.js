import React, {useState, useEffect, useContext} from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import AdminSidebar from "../SideBar/Sidebar";
import AdminNavbar from "../Navbar/Navbar";

import { GlobalContext } from "../../../../core/context/GlobalContext";

import { useHistory } from "react-router-dom";
import { SystemContainer } from "../../../../components";
import { localstoragehelper } from "../../../../core/utils/storage";
import { Dashboard } from "../Contents";
import { DrawerHeader, AppBar, Drawer } from "../../../../components/Drawer/Drawer";


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
      {/* CONTENTS */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='flex justify-center h-[100vh] bg-secondary'>
        <DrawerHeader />
        <SystemContainer
        className='mt-20'
        maxWidth={'xl'}
        > 
          <Dashboard/>
        </SystemContainer>
      </Box>
    </Box>
  );
}
