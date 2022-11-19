import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../core/context/GlobalContext";
import LoginField from "./login_field";
import { useHistory } from "react-router-dom";
import { localstoragehelper } from "../../core/utils/storage";
import { ReplicateOnInit } from "../../core/context/CloneElement";
import { CustomizedSnackbars, SystemBackdrop } from "../../components";

const Login = (props) => {
  const {
    HandleChangeEmailLogin,
    HandleChangePasswordLogin,
    HandleSelectLoginAs,
    setSelectedIndex,
    allFieldSelected,
    setAllFieldSelected,
    selectedIndex,
    handleSignIn,
    handleClose,
    snackbarSettings,
    open,
    tokenScanned,
    settings,
  } = useContext(GlobalContext);

  const key = localstoragehelper.load("key_identifier");
  const authtoken = localstoragehelper.load("appid");
  const history = useHistory();

  const [snackBarWidth, setSnackBarWidth] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      return window.innerWidth < 1024
        ? setSnackBarWidth(false)
        : setSnackBarWidth(true);
    });
    setSelectedIndex(1);
  }, [HandleChangeEmailLogin, HandleChangePasswordLogin]);

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
    <>
      <LoginField
        HandleChangeEmailLogin={HandleChangeEmailLogin}
        HandleChangePasswordLogin={HandleChangePasswordLogin}
        HandleSelectLoginAs={HandleSelectLoginAs}
        allFieldSelected={allFieldSelected}
        setAllFieldSelected={setAllFieldSelected}
        selectedIndex={selectedIndex}
        handleSignIn={handleSignIn}
        snackbarSettings={snackbarSettings}
      />
      <SystemBackdrop open={open} />
      <CustomizedSnackbars
        style={{ width: snackBarWidth ? "30%" : "100%" }}
        open={snackbarSettings.settings.open.homepage}
        message={snackbarSettings.settings.message}
        handleClose={handleClose}
        severity={snackbarSettings.settings.severity}
        autoHideDuration={snackbarSettings.settings.autoHideDuration}
      />
    </>
  );
};

export default Login;
