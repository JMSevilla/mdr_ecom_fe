import React from 'react'
import { Box } from '@mui/material';
import AppTextField from '../../components/TextField/TextField';
import SystemTypography from '../../components/Typography/Typography';
import AppButton from '../../components/Buttons/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from "@mui/material/Link";
import Checkbox from '@mui/material/Checkbox';
import { useHistory } from "react-router-dom";
import { appRouter } from "../../routes/router";

const Login_field = () => {
    const history = useHistory();
  const navigateSignup = () => {
    history.push(appRouter.Signup.path);
  };
  return (
    <Box style={{display: 'flex', flexDirection: 'column', gap: '.5rem', marginTop: '10px'}}>
        <AppTextField label={"Username or Email"} placeholder={'Enter username or email'} variant="outlined" style={{width: '400px', marginBottom: '10px'}}/>  
        <AppTextField label={"Password"} type={'password'} placeholder={'Enter password'}/>  
    <Box style={{display: 'flex', alignItems:'center', justifyContent: 'space-between'}}>
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Remember Me" />
        </FormGroup> 
        <Link color={"inherit"} underline={"none"} style={{cursor: 'pointer'}}>Forget Password?</Link>
    </Box>
    <AppButton buttonName={'Sign In'} variant="contained" style={{marginTop: '10px'}}/>
    <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.5rem', marginTop: '5px'}}>
        <SystemTypography text={'Not a member ?'}/>
        <Link color={"primary"} underline={"none"} onClick={() => navigateSignup()} style={{cursor: 'pointer'}}>Sign Up Now</Link>
    </Box>
    </Box>
  )
}

export default Login_field