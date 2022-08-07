import React, {useState, useEffect }from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppDropdown from "../Dropdown/Dropdown";
import AppModal from '../../components/Modal/Modal';
import {Link as Anchor} from "@mui/material";
import {Link} from 'react-scroll';
import logo from "../../assets/images/logo/modernresolve.png";
import { navbarData, shopButton } from "../../core/utils/helper";
import SystemLogin from "../../views/Login/Login";
import { useHistory } from "react-router-dom";
import { appRouter } from "../../routes/router";

const ApplicationBar = (props) => {
  const [bg, setBg] = useState(false);

  const history = useHistory();
  const backToHome = () => {
    history.push(appRouter.Homepage.path);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  },[])

  const { title, simplified } = props;
  return (
    <>
      <AppBar
        color={'inherit'}
        style={{ minHeight: "80px", display: "flex", justifyContent: "center", backgroundColor: bg ? 'rgb(255,255,255)' : 'transparent'}}
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
                <Anchor color={"inherit"} underline={"none"} style={{cursor: 'pointer'}}>
                <Link onClick={backToHome} activeClass='active' spy={true} smooth={true} duration={500} offset={20}
                  style={{
                    display: "flex",
                    alignItems: "center",
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
                  </Link>
                </Anchor>
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
                        <Anchor color={'inherit'} underline={'hover'} style={{cursor: 'pointer'}}>
                          <Link to={item.to} activeClass='active' spy={true} smooth={true} duration={500} offset={-70}>
                            <Typography variant="h6" component="div">
                              {item.link}
                            </Typography>
                            </Link>
                          </Anchor>
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
          <AppModal buttonName={"SIGN IN"} title={"ACCOUNT LOGIN"} description={<SystemLogin/>} logo 
          buttonStyle={{fontSize: '15px', backgroundColor: 'black', color: 'white', padding: '10px 25px', borderRadius: '30px'}}/>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ApplicationBar;
