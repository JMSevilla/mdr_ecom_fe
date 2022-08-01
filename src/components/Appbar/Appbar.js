import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppButton from "../Buttons/Button";
import Link from '@mui/material/Link';
import logo from "../../assets/images/logo/modernresolve.png";
import { useHistory } from "react-router-dom";
import { appRouter } from "../../routes/router";
import { navbarData } from "../../constants/Header/NavbarData";

const ApplicationBar = (props) => {
  const { title } = props;
  const history = useHistory();
  const navigateSignup = () => {
    history.push(appRouter.Signup.path);
  };
  return (
    <>
      <AppBar
        color={"inherit"}
        style={{ minHeight: "80px", display: "flex", justifyContent: "center" }}
      >
        <Toolbar>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              gap: ".5rem",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            />
            <Typography variant="h6" component="div">
              {title}
            </Typography>
          </Box>
          <Box style={{display: 'flex', flexGrow: 1, gap: '2rem'}}>
            {navbarData.map((item, index) => {
              return (
                <>
                  {item.dropdown === false ? (
                    <>
                      <Link href={item.to} key={index} color={'inherit'} underline={'hover'}>
                        <Typography variant="h6" component="div">
                          {item.link}
                        </Typography>
                      </Link>
                    </>
                  ) : (
                    <>
                    
                    </>
                  )}
                </>
              );
            })}
          </Box>
          <AppButton buttonName={"Sign in"} size={"small"} color={"inherit"} />{" "}
          /{" "}
          <AppButton
            buttonName={"Sign up"}
            handleClick={() => navigateSignup()}
            size={"small"}
            color={"inherit"}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ApplicationBar;
