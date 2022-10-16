import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SystemContainer } from "../../../../../components";
import { DrawerHeader, Drawer, AppBar } from "../../../../../components/Drawer/Drawer";
import ProductList from "./ProductList";

import AdminNavbar from "../../Navbar/Navbar";
import AdminSidebar from "../../SideBar/Sidebar";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../../../../core/context/GlobalContext";
import { localstoragehelper } from "../../../../../core/utils/storage";
import {motion} from 'framer-motion';

// for search bar
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";


const ProductMgmt = () => {
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
                Product Management
              </h1>
            </Box>
            {/* Contents */}
            <Box className="flex flex-col gap-6">
              <Box className='flex gap-6 flex-col items-center lg:flex-row '>
                {/* search bar */}
                <Box>
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="search product"
                      inputProps={{ "aria-label": "search product" }}
                    />
                    <IconButton
                      type="submit"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                </Box>
                <Box className="flex gap-2 justify-center lg:justify-end sm:gap-4 sm:flex-row sm:w-full">
                  <h1 className="text-md font-medium font-main text-black bg-success px-2 py-1 text-white rounded-xl">
                    Available
                  </h1>
                  <h1 className="text-md font-medium font-main text-black bg-ongoing px-2 py-1 text-white rounded-xl">
                    In Progress
                  </h1>
                  <h1 className="text-md font-medium font-main text-black bg-error px-2 py-1 text-white rounded-xl">
                    Fixing
                  </h1>
                  <h1 className="text-md font-medium font-main text-black bg-blue px-2 py-1 text-white rounded-xl">
                    Idle
                  </h1>
                </Box>
              </Box>
              <ProductList />
            </Box>
          </Box>
          </motion.div>
        </SystemContainer>
      </Box>
    </Box>
  );
};

export default ProductMgmt;
