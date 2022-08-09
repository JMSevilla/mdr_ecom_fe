import React from "react";
import { Box } from "@mui/material";
import AppTextField from "../../components/TextField/TextField";
import SystemTypography from "../../components/Typography/Typography";
import AppButton from "../../components/Buttons/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";
import { appRouter } from "../../routes/router";

const Login_field = (props) => {
  const {allFieldSelected, setAllFieldSelected, selectedIndex, setSelectedIndex, HandleChangeEmailLogin, HandleChangePasswordLogin} = props;
  const { fieldSettings } = allFieldSelected[1]
  const history = useHistory();
  const navigateSignup = () => {
    history.push(appRouter.Signup.path);
  };
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        marginTop: "10px",
      }}
    >
      <AppTextField
        type={'text'}
        value={fieldSettings.userLoginObj.email}
        label={"Email Address"}
        placeholder={"Enter your email"}
        handleChange={(e) => HandleChangeEmailLogin(e)}
        variant="outlined"
        style={{ width: "400px", marginBottom: "10px" }}
        texthelper={fieldSettings.error_provider_message.epm_email}
        iserror={fieldSettings.errorProvider.error_email}
      />
      <AppTextField
        type={'password'}
        value={fieldSettings.userLoginObj.password}
        label={"Password"}
        placeholder={"Enter password"}
        handleChange={(e) => HandleChangePasswordLogin(e)}
        variant="outlined"
        style={{ width: "400px", marginBottom: "10px" }}
        texthelper={fieldSettings.error_provider_message.epm_password}
        iserror={fieldSettings.errorProvider.error_password}
      />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
        </FormGroup>
        <Link
          color={"inherit"}
          underline={"none"}
          style={{ cursor: "pointer" }}
        >
          Forget Password?
        </Link>
      </Box>
      <AppButton
        buttonColor={'button-black'}
        buttonName={"Sign In"}
        variant="contained"
        style={{ margin: "10px 0px", width: '100%', fontWeight: 600}}
      />
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: ".5rem",
          marginTop: "5px",
        }}
      >
        <SystemTypography text={"Not a member?"} />
        <Link
          color={"primary"}
          underline={"none"}
          onClick={() => navigateSignup()}
          style={{ cursor: "pointer" }}
        >
          Sign Up Now
        </Link>
      </Box>
    </Box>
  );
};

export default Login_field;
