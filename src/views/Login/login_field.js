import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import {
  AppTextField,
  SystemTypography,
  AppButton,
  SystemSelect,
  AppFooter,
} from "../../components";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";
import { appRouter } from "../../routes/router";
import { loginIcon } from "../../core/utils/helper";
import Spiels from "../../core/Spiels/Spiels";
import logo from "../../assets/images/logo/modernresolve.png";
import loginImage from '../../assets/images/logo/loginLogo.svg';

const Login_field = (props) => {
  const {
    allFieldSelected,
    HandleChangeEmailLogin,
    HandleChangePasswordLogin,
    HandleSelectLoginAs,
    handleSignIn,
  } = props;
  const { fieldSettings } = allFieldSelected[1];
  const history = useHistory();
  const navigateSignup = () => {
    history.push(appRouter.Signup.path);
  };
  const navigateForgetPassword = () => {
    history.push(appRouter.ForgetPassword.path);
  };

  const handleRememberMe = (e) => {
    const checked = e.target.checked;
    const tempAllFieldSelected = allFieldSelected[1];
    const tempFieldSelected = { ...tempAllFieldSelected.fieldSettings };
    let userLoginObj;
    if (checked) {
      userLoginObj = {
        email: tempFieldSelected.userLoginObj.email,
        password: tempFieldSelected.userLoginObj.password,
      };
      let storage = {
        fixSettings: userLoginObj,
        rm: true,
      };
      localStorage.setItem("rm", JSON.stringify(storage));
    }
  };
  const handleHelperEmail = () => {
    if (localStorage.getItem("rm") === null) {
      return fieldSettings.userLoginObj.email;
    } else if (localStorage.getItem("rm") !== null) {
      const rm = JSON.parse(localStorage.getItem("rm")).rm;
      if (rm) {
        Spiels.fields[1].fieldSettings.userLoginObj.email = JSON.parse(
          localStorage.getItem("rm")
        ).fixSettings.email;
        return fieldSettings.userLoginObj.email;
      } else {
        return fieldSettings.userLoginObj.email;
      }
    }
  };
  const handleHelperPassword = () => {
    if (localStorage.getItem("rm") === null) {
      return fieldSettings.userLoginObj.password;
    } else if (localStorage.getItem("rm") !== null) {
      const rm = JSON.parse(localStorage.getItem("rm")).rm;
      if (rm) {
        Spiels.fields[1].fieldSettings.userLoginObj.password = JSON.parse(
          localStorage.getItem("rm")
        ).fixSettings.password;
        return fieldSettings.userLoginObj.password;
      } else {
        return fieldSettings.userLoginObj.password;
      }
    }
  };
  return (
    <>
      <Box className="h-[90vh] flex items-center">
        <Box className="container-lg px-12 py-12 mx-auto border flex items-center justify-center border-gray-300 rounded-xl shadow-lg shadow-black-500/40 lg:px-20">
          {/* LOGIN CONTENT */}
          <Box className="flex justify-between items-center gap-14">
            {/* LEFT SIDE CONTENT */}
            <Box className="flex flex-col w-full hidden lg:block lg:w-1/2">
              <img src={loginImage} alt="" style={{ height: 350, width: 350 }}/>
              <p className="font-main text-xl">Feel free to log in and set up your own account..</p>
            </Box>
            {/* RIGHT SIDE CONTENT */}
            <Box className='w-full lg:w-1/2'>
              <Box className=" flex flex-col ">
                <Box className="flex items-center justify-around">
                  <Box>
                  <p className='font-subTitle text-lg font-medium'>Sign in with</p>
                  </Box>
                  <Box className='flex gap-6'>
                  {loginIcon.map((item, index) => {
                    return (
                      <Link
                        href={item.link}
                        target="_blank"
                        key={index}
                        color={"inherit"}
                        className='text-lg'
                        style={{
                          color: item.color,
                          borderRadius: "50%",
                        }}
                      >
                        {item.icon}
                      </Link>
                    );
                  })}
                  </Box>
                </Box>
                <Box className="flex items-center my-4 before:flex-1 before:border-t before:border-black-300 before:mt-0.5 after:flex-1 after:border-t after:border-black-300 after:mt-0.5">
                  <p class="text-center font-semibold mx-4 mb-0">Or</p>
                </Box>
                <Box className='flex flex-col gap-2'>
                <AppTextField
                  type={"text"}
                  value={handleHelperEmail()}
                  className={"w-auto md:w-[100%] text-xl mb-4"}
                  label={"Email Address"}
                  placeholder={"Enter your email"}
                  handleChange={(e) => HandleChangeEmailLogin(e)}
                  variant="outlined"
                  texthelper={fieldSettings.error_provider_message.epm_email}
                  iserror={fieldSettings.errorProvider.error_email}
                />
                <AppTextField
                  type={"password"}
                  value={handleHelperPassword()}
                  className={"w-auto md:w-[100%] text-xl mb-4"}
                  label={"Password"}
                  placeholder={"Enter password"}
                  handleChange={(e) => HandleChangePasswordLogin(e)}
                  variant="outlined"
                  texthelper={fieldSettings.error_provider_message.epm_password}
                  iserror={fieldSettings.errorProvider.error_password}
                />
                </Box>
                <Box className="flex items-center justify-between">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox onChange={(e) => handleRememberMe(e)} />
                      }
                      label="Remember Me"
                    />
                  </FormGroup>
                  <Link
                    onClick={navigateForgetPassword}
                    color={"inherit"}
                    underline={"none"}
                    className="cursor-pointer"
                  >
                    Forget Password?
                  </Link>
                </Box>
                <AppButton
                  handleClick={handleSignIn}
                  buttonColor={"button-black"}
                  buttonName={"Sign In"}
                  variant="contained"
                  style={{ margin: "10px 0px", width: "100%", fontWeight: 600 }}
                />
                <Box className="flex justify-center items-center gap-2 mt-[5px]">
                  <SystemTypography text={"Not a member?"} />
                  <Link
                    color={"primary"}
                    underline={"none"}
                    onClick={() => navigateSignup()}
                    className="cursor-pointer"
                  >
                    Sign Up Now
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <AppFooter />
    </>
  );
};

export default Login_field;
