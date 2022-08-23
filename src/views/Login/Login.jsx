import React, { useContext } from "react";
import { GlobalContext } from "../../core/context/GlobalContext";
import LoginField from "./login_field";
import { ReplicateOnInit } from "../../core/context/CloneElement";
import { CustomizedSnackbars } from "../../components";

const Login = () => {
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
    snackbarSettings
  } = useContext(GlobalContext);
  return (
    <>
    <ReplicateOnInit
      children={
        <LoginField
          HandleChangeEmailLogin={HandleChangeEmailLogin}
          HandleChangePasswordLogin={HandleChangePasswordLogin}
          HandleSelectLoginAs={HandleSelectLoginAs}
          setSelectedIndex={setSelectedIndex(1)}
          allFieldSelected={allFieldSelected}
          setAllFieldSelected={setAllFieldSelected}
          selectedIndex={selectedIndex}
          handleSignIn={handleSignIn}
          snackbarSettings={snackbarSettings}
        />
      }
    />
           <CustomizedSnackbars 
            style={{width: '80%'}}
            open={snackbarSettings.settings.open}
            message={snackbarSettings.settings.message}
            handleClose={handleClose}
            severity={snackbarSettings.settings.severity}
            autoHideDuration={snackbarSettings.settings.autoHideDuration}
            />
  </>
  );
};

export default Login;
