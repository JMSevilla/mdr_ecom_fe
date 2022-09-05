import React, {useState, useEffect }from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {AppModal} from '../../components';
import logo from "../../assets/images/logo/modernresolve.png";
import SystemLogin from "../../views/Login/Login";
import { useHistory } from "react-router-dom";
import { appRouter } from "../../routes/router";
import NavLinks from "./NavLinks";
import NavMobile from "./NavMobile";

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
    <AppBar color={'inherit'} style={{minHeight: bg ? '75px' : '80px', display: "flex", justifyContent: "center", backgroundColor: bg ? 'rgb(255,255,255)' : 'transparent'}}>
      <Toolbar>
        <Box className='container mx-auto h-full flex items-center justify-between'>
           {/* LOGO */}
            <Typography variant="p" onClick={backToHome} className='text-2xl font-logo lg:text-2xl flex items-center gap-2 cursor-pointer'><img src={logo} className='w-[50px] h-[50px]' alt='logo'/>{title}</Typography>
            {/* NAVLINKS */}
            <Box className='hidden lg:block'>
                {!simplified && (<>
                  <NavLinks/>
                </>)}
            </Box>
            <Box className='hidden lg:block'>
              <AppModal buttonName={"SIGN IN"} buttonColor={'button-black'} title={"ACCOUNT LOGIN"} description={<SystemLogin/>} 
              buttonStyle={{fontSize: '15px', padding: '10px 25px', borderRadius: '30px', fontWeight: 600}} logo/>
            </Box>
             {/* NAV MOBILE */}
             <Box className='lg:hidden'>
                <NavMobile />
            </Box>
        </Box>
      </Toolbar>
    </AppBar>
    </>
  );
};

export default ApplicationBar;
