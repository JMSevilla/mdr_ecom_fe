import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import {AppTextField, SystemTypography, AppButton, SystemSelect} from "../../components";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";
import { appRouter } from "../../routes/router";
import { loginIcon } from "../../core/utils/helper";
import Spiels from "../../core/Spiels/Spiels";
import logo from "../../assets/images/logo/modernresolve.png";

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
    <Box className=' container px-6 py-12 h-full mt-[100px]  mx-auto shadow'>
      <Box className='flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full gap-20' >
        <Box className="flex text-center md:w-8/12 lg:w-6/12 mb-12 md:mb-0  hidden lg:block" >
          {/* MDR logo */}
        <img
            src={logo}
            class="mx-auto"
            alt="Phone image"
          />
          <SystemTypography 
          text={'E-Commerce'} 
          variant={'h4'}
          />
          <SystemTypography 
          text={'ACCOUNT LOGIN'} 
          variant={'h3'}
          />
        </Box>
        <Box className=' flex flex-col '>
          <Box className='flex flex-row items-center justify-center lg:justify-start gap-3' >
          <Typography 
          className={'text-lg mb-0 mr-4 font-bold'}  
          variant='p'
          > Sign in with</Typography>
          {loginIcon.map((item, index) => {
            return (
              <Link
                href={item.link}
                target="_blank"
                key={index}
                color={"inherit"}
                style={{ padding: '10px', color: item.color, borderRadius: '50%',}}
              >
                  {item.icon}
              </Link>
            );
          })}
          </Box>
          <Box
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">Or</p>
          </Box>
        <AppTextField
          type={'text'}
          value={
            handleHelperEmail()
          }
          className={'w-auto md:w-[100%] text-xl'}
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
          className={'w-auto md:w-[100%] text-xl'}
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
      </Box>
      
    
    </Box>
  );
};

export default Login_field;
