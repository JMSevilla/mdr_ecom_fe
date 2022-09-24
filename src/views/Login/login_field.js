import React, {useState, useEffect} from "react";
import { Box } from "@mui/material";
import {AppTextField, SystemTypography, AppButton, SystemSelect} from "../../components";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";
import { appRouter } from "../../routes/router";
import { loginUserCategory } from "../../core/utils/helper";
import Spiels from "../../core/Spiels/Spiels";

const Login_field = (props) => {
  const {allFieldSelected, HandleChangeEmailLogin, HandleChangePasswordLogin, HandleSelectLoginAs, handleSignIn} = props;
  const { fieldSettings } = allFieldSelected[1]
  const history = useHistory();
  const navigateSignup = () => {
    history.push(appRouter.Signup.path);
  };
  const navigateForgetPassword = () => {
    history.push(appRouter.ForgetPassword.path);
  }
 
  const handleRememberMe = (e) => {
    const checked = e.target.checked
    const tempAllFieldSelected = allFieldSelected[1]
    const tempFieldSelected = {...tempAllFieldSelected.fieldSettings}
    let userLoginObj
    if(checked){
      userLoginObj = {
        email : tempFieldSelected.userLoginObj.email,
        password : tempFieldSelected.userLoginObj.password
      }
      let storage = {
        fixSettings : userLoginObj,
        rm : true
      }
      localStorage.setItem('rm', JSON.stringify(storage))
      console.log(storage)
    }
  }
  const handleHelperEmail = () => {
    if(localStorage.getItem('rm') === null)
    {
      return fieldSettings.userLoginObj.email
    } else if(localStorage.getItem('rm') !== null){
      const rm = JSON.parse(localStorage.getItem('rm')).rm
      if(rm){
        Spiels.fields[1].fieldSettings.userLoginObj.email = JSON.parse(localStorage.getItem('rm')).fixSettings.email
        return fieldSettings.userLoginObj.email
      } else {
        return fieldSettings.userLoginObj.email
      }
    }
  }
  const handleHelperPassword = () => {
    if(localStorage.getItem('rm') === null)
    {
      return fieldSettings.userLoginObj.password
    } else if(localStorage.getItem('rm') !== null){
      const rm = JSON.parse(localStorage.getItem('rm')).rm
      if(rm){
        Spiels.fields[1].fieldSettings.userLoginObj.password = JSON.parse(localStorage.getItem('rm')).fixSettings.password
        return fieldSettings.userLoginObj.password
      } else {
        return fieldSettings.userLoginObj.password
      }
    }
  }
  return (
    <Box className='flex flex-col gap-2 mt-[10px]'>
      <AppTextField
        type={'text'}
        value={
          handleHelperEmail()
        }
        className={'w-auto md:w-[400px] text-xl'}
        label={"Email Address"}
        placeholder={"Enter your email"}
        handleChange={(e) => HandleChangeEmailLogin(e)}
        variant="outlined"
        texthelper={fieldSettings.error_provider_message.epm_email}
        iserror={fieldSettings.errorProvider.error_email}
      />
      <AppTextField
        type={'password'}
        value={
          handleHelperPassword()
        }
        className={'w-auto text-xl'}
        label={"Password"}
        placeholder={"Enter password"}
        handleChange={(e) => HandleChangePasswordLogin(e)}
        variant="outlined"
        texthelper={fieldSettings.error_provider_message.epm_password}
        iserror={fieldSettings.errorProvider.error_password}
      />
      <Box className="flex items-center justify-between">
        <FormGroup>
          <FormControlLabel control={<Checkbox onChange={(e) => handleRememberMe(e)} />} label="Remember Me" />
        </FormGroup>
        <Link
          onClick={navigateForgetPassword}
          color={"inherit"}
          underline={"none"}
          className='cursor-pointer'
        >
          Forget Password?
        </Link>
      </Box>
      <AppButton
        handleClick={handleSignIn}
        buttonColor={'button-black'}
        buttonName={"Sign In"}
        variant="contained"
        style={{ margin: "10px 0px", width: '100%', fontWeight: 600}}
      />
      <Box className='flex justify-center items-center gap-2 mt-[5px]'>
        <SystemTypography text={"Not a member?"} />
        <Link
          color={"primary"}
          underline={"none"}
          onClick={() => navigateSignup()}
          className='cursor-pointer'
        >
          Sign Up Now
        </Link>
      </Box>
    </Box>
  );
};

export default Login_field;
