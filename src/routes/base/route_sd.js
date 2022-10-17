import React, { useContext, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import 'react-pro-sidebar/dist/css/styles.css';
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import { DrawerHeader, Drawer, AppBar } from "../../components/Drawer/Drawer";
import { SystemContainer } from "../../components";

import { GlobalContext } from "../../core/context/GlobalContext";
import axios from "axios";
import { appRouter } from "../router";
import { Redirect } from "react-router-dom";
import { localstoragehelper } from "../../core/utils/storage";

// NAVBAR AND SIDEBARS
import { AdminNavbar, AdminSidebar, BONavbar, BOSidebar, StudentNavbar, StudentSidebar } from "../../views";

const key = localstoragehelper.load("key_identifier");
const auth = localstoragehelper.load("appid");

const RouteWithAdminSidebar = ({ component: Component, ...rest }) => {
  const globalcontextValues = useContext(GlobalContext);
  const { token, tokenScanned, settings } = globalcontextValues;
  const history = useHistory();
  const [open, setOpen] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const theme = useTheme();

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
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setDropDown(!dropDown);
  };
  const secure_route = () => {
    let obj = {
      key: key,
      token: auth,
    };
    var data = new FormData();
    data.append("key", obj.key);
    data.append("token", obj.token);
    axios
      .post(
        process.env.REACT_APP_API_DEV_URL + "tokenization/check-secure-route",
        data
      )
      .then((response) => {
        if (response.data.message == "unprotected") {
          return true;
        } else {
          return false;
        }
      });
  };
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!key || !auth || secure_route()) {
          return <Redirect to={appRouter.SignIn.path} />;
        } else {
          return (
            <>
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
                <Box
                  component="main"
                  sx={{ flexGrow: 1, p: 3 }}
                  className="flex justify-center h-[100vh]"
                >
                  <DrawerHeader />
                  <SystemContainer className="mt-20" maxWidth={"xl"}>
                    <Component {...props} />
                  </SystemContainer>
                </Box>
              </Box>
            </>
          );
        }
      }}
    />
  );
};

const RouteWithBusinessOwnerSidebar = ({ component: Component, ...rest }) => {
  const globalcontextValues = useContext(GlobalContext);
  const { token, tokenScanned, settings } = globalcontextValues;
  const history = useHistory();
  const [open, setOpen] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const theme = useTheme();

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
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setDropDown(!dropDown);
  };
  const secure_route = () => {
    let obj = {
      key: key,
      token: auth,
    };
    var data = new FormData();
    data.append("key", obj.key);
    data.append("token", obj.token);
    axios
      .post(
        process.env.REACT_APP_API_DEV_URL + "tokenization/check-secure-route",
        data
      )
      .then((response) => {
        if (response.data.message == "unprotected") {
          return true;
        } else {
          return false;
        }
      });
  };
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!key || !auth || secure_route()) {
          return <Redirect to={appRouter.SignIn.path} />;
        } else {
          return (
            <>
              <Box className="flex">
                <CssBaseline />
                <BONavbar
                  signoutRouteDestroy={signoutRouteDestroy}
                  token={token}
                  open={open}
                  handleDrawerOpen={handleDrawerOpen}
                  AppBar={AppBar}
                />
                <BOSidebar
                  open={open}
                  handleDrawerClose={handleDrawerClose}
                  theme={theme}
                  handleClick={handleClick}
                  dropDown={dropDown}
                  Drawer={Drawer}
                  DrawerHeader={DrawerHeader}
                />
                <Box
                  component="main"
                  sx={{ flexGrow: 1, p: 3 }}
                  className="flex justify-center h-[100vh]"
                >
                  <DrawerHeader />
                  <SystemContainer className="mt-20" maxWidth={"xl"}>
                    <Component {...props} />
                  </SystemContainer>
                </Box>
              </Box>
            </>
          );
        }
      }}
    />
  );
};

const RouteWithStudentSidebar = ({ component: Component, ...rest }) => {
  const globalcontextValues = useContext(GlobalContext);
  const { token, tokenScanned, settings } = globalcontextValues;
  const history = useHistory();
  const [open, setOpen] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const theme = useTheme();

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
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setDropDown(!dropDown);
  };
  const secure_route = () => {
    let obj = {
      key: key,
      token: auth,
    };
    var data = new FormData();
    data.append("key", obj.key);
    data.append("token", obj.token);
    axios
      .post(
        process.env.REACT_APP_API_DEV_URL + "tokenization/check-secure-route",
        data
      )
      .then((response) => {
        if (response.data.message == "unprotected") {
          return true;
        } else {
          return false;
        }
      });
  };
  return (
    <Route
    {...rest}
    render={(props) => {
      if (!key || !auth || secure_route()) {
        return <Redirect to={appRouter.SignIn.path} />;
      } else {
        return (
          <>
            <Box className="flex">
              <CssBaseline />
              <StudentNavbar
                signoutRouteDestroy={signoutRouteDestroy}
                token={token}
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                AppBar={AppBar}
              />
              <StudentSidebar
                open={open}
                handleDrawerClose={handleDrawerClose}
                theme={theme}
                handleClick={handleClick}
                dropDown={dropDown}
                Drawer={Drawer}
                DrawerHeader={DrawerHeader}
              />
              <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
                className="flex justify-center h-[100vh]"
              >
                <DrawerHeader />
                <SystemContainer className="mt-20" maxWidth={"xl"}>
                  <Component {...props} />
                </SystemContainer>
              </Box>
            </Box>
          </>
        );
      }
    }}
  />
)
};

export { RouteWithAdminSidebar, RouteWithBusinessOwnerSidebar, RouteWithStudentSidebar};
