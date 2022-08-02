import React, { useContext } from "react";
import { GlobalContext } from "../../core/context/GlobalContext";
import LoginField from "./login_field";
import { ReplicateOnInit } from "../../core/context/CloneElement";

const Login = () => {
  const {
    HandleChangeEmailLogin,
    HandleChangePasswordLogin,
    setSelectedIndex,
    allFieldSelected,
    setAllFieldSelected,
    selectedIndex,
  } = useContext(GlobalContext);
  return (
    <ReplicateOnInit
      children={
        <LoginField
          HandleChangeEmailLogin={HandleChangeEmailLogin}
          HandleChangePasswordLogin={HandleChangePasswordLogin}
          setSelectedIndex={setSelectedIndex(1)}
          allFieldSelected={allFieldSelected}
          setAllFieldSelected={setAllFieldSelected}
          selectedIndex={selectedIndex}
        />
      }
    />
  );
};

export default Login;
