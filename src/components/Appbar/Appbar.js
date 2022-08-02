import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppButton from "../Buttons/Button";
import AppDropdown from "../Dropdown/Dropdown";
import Link from "@mui/material/Link";
import logo from "../../assets/images/logo/modernresolve.png";
import { useHistory } from "react-router-dom";
import { appRouter } from "../../routes/router";
import { navbarData, shopButton } from "../../core/utils/helper";


const ApplicationBar = (props) => {
  const { title, simplified } = props;
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
            {simplified ? (
              <>
                <Link
                  href="/"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                  }}
                  color={"inherit"}
                  underline={"none"}
                >
                  <img
                    src={logo}
                    alt="logo"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <Typography variant="h6" component="div">
                    {title}
                  </Typography>
                </Link>
              </>
            ) : (
              <>
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "50px", height: "50px" }}
                />
                <Typography variant="h6" component="div">
                  {title}
                </Typography>
              </>
            )}
          </Box>
          {!simplified ? (
            <>
              <Box style={{ display: "flex", flexGrow: 1, gap: "2rem", alignItems: 'center'}}>
                {navbarData.map((item, index) => {
                  return (
                    <>
                      {item.dropdown === false ? (
                        <>
                          <Link
                            href={item.to}
                            key={index}
                            color={"inherit"}
                            underline={"hover"}
                          >
                            <Typography variant="h6" component="div">
                              {item.link}
                            </Typography>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Box style={{display:'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                          <AppDropdown dropdownTitle={item.link} optionsArray={shopButton}/>
                          </Box>
                        </>
                      )}
                    </>
                  );
                })}
              </Box>
            </>
          ) : (
            <></>
          )}
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
