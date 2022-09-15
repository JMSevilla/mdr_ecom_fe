import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../core/context/GlobalContext";
import LoginField from "./login_field";
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
    open
  } = useContext(GlobalContext);
  useEffect(() => {
    setSelectedIndex(1)
  }, [HandleChangeEmailLogin, HandleChangePasswordLogin])
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
    <SystemBackdrop
      open={open}
    />
           <CustomizedSnackbars 
            style={{width: '80%'}}
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
