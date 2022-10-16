import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SystemContainer } from "../../../../../components";
import { DrawerHeader, Drawer, AppBar } from "../../../../../components/Drawer/Drawer";

import AdminNavbar from "../../Navbar/Navbar";
import AdminSidebar from "../../SideBar/Sidebar";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../../../../core/context/GlobalContext";
import { localstoragehelper } from "../../../../../core/utils/storage";
import { motion } from 'framer-motion';

// for tabs
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import UsersList from "./UsersList";
import AddUser from "./AddUser";


// for tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const UserMgmt = () => {
    const globalcontextValues = useContext(GlobalContext);
    const { token, tokenScanned, settings } = globalcontextValues;
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [dropDown, setDropDown] = useState(false);
    const key = localstoragehelper.load("key_identifier");

    const history = useHistory();

    useEffect(() => {
      window.addEventListener("resize", () => {
        return window.innerWidth < 1024 ? setOpen(false) : setOpen(true);
      });
    }, []);
  
    const signoutRouteDestroy = () => {
      const tempAllFieldSelected = [...settings];
      const tempFieldSelected = { ...tempAllFieldSelected[0] };
      history.push(tempFieldSelected.router_obj.home);
    };
  
    const handleClick = () => {
      setDropDown(!dropDown);
    };
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    // for tabs
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
      <Box className="flex">
      <CssBaseline />
      <AdminNavbar
        signoutRouteDestroy={signoutRouteDestroy}
        token={token}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        AppBar={AppBar}
      />
      <AdminSidebar
        open={open}
        handleDrawerClose={handleDrawerClose}
        theme={theme}
        handleClick={handleClick}
        dropDown={dropDown}
        Drawer={Drawer}
        DrawerHeader={DrawerHeader}
      />
      {/* CONTENTS */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        className="flex justify-center h-[100vh]"
      >
        <DrawerHeader />
        <SystemContainer className="mt-20" maxWidth={"xl"}>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
          <Box className="flex flex-col h-full gap-4">
            {/* title */}
            <Box className="flex justify-between items-center">
              <h1 className="text-2xl font-bold font-main text-black uppercase">
                User Management
              </h1>
            </Box>
            {/* TAB CONTENT */}
            <Box className='w-auto lg:w-full'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                <Tab label="Users List" {...a11yProps(0)} />
                <Tab label="Add New User" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
            <UsersList/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <AddUser/>
            </TabPanel>
            </Box>
          </Box>

          </motion.div>
        </SystemContainer>
      </Box>
    </Box>
  )
}

export default UserMgmt