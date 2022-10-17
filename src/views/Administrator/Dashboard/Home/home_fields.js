import React, { useState, useEffect, useContext } from "react";
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
import {
  DrawerHeader,
  AppBar,
  Drawer,
} from "../../../../components/Drawer/Drawer";

export default function HomeFieldDDashboard() {
  const globalcontextValues = useContext(GlobalContext);
  const { token, tokenScanned, settings } = globalcontextValues;
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const key = localstoragehelper.load("key_identifier");
  const authtoken = localstoragehelper.load("appid");

  const history = useHistory();

  useEffect(() => {
    window.addEventListener("resize", () => {
      return window.innerWidth < 1024 ? setOpen(false) : setOpen(true);
    });
  }, []);

  useEffect(() => {
    const tempAllFieldSelected = [...settings];
    const tempFieldSelected = { ...tempAllFieldSelected[0] };
    if (!key || !authtoken) {
      history.push(tempFieldSelected.router_obj.login);
    } else {
      tokenScanned(0);
    }
  }, [key]);
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3 }}
      className="flex justify-center h-[100vh]"
    >
      <DrawerHeader />
      <SystemContainer className="mt-20" maxWidth={"xl"}>
        <Dashboard />
      </SystemContainer>
    </Box>
  );
}
