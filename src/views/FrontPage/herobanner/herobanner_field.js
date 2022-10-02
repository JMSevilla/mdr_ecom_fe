import React from "react";
// import AppSwiper from "../../../components/Swiper/Swiper";
import { herobannerButton, socialAccounts, heroBannerData } from "../../../core/utils/helper";
import {AppButton} from "../../../components";
import { Box, Stack} from "@mui/material";
import { NavHashLink as Link } from 'react-router-hash-link';

const HeroBannerField = () => {
  return (
    <>
    <Box id="home" className='flex items-center h-[100vh] bg-primary'>
      <div className="blur hidden lg:block" style={{ top: "-10%", right: "0" }}></div>
      <div className="blur hidden lg:block" style={{ bottom: "30%", left: "0" }}></div>
      {/* HERO BANNER CONTENT */}
      <Box className='container mx-auto flex items-center lg:gap-20'>
          {/* HERO BANNER LEFT SIDE */}
          <Box className='flex flex-col gap-12 text-center items-center w-full lg:w-1/2 lg:text-left lg:items-start'>
            <Box className='flex flex-col gap-8'>

              <h5 className='text-3xl font-main font-bold leading-none text-accent lg:text-4xl'>
                &lt;ModernResolve/&gt;
              </h5>
              <h5 className='text-3xl font-subtitle font-medium lg:text-5xl'>
                We're here to create meaningful and lasting relationship with our clients.
              </h5>
            </Box>
            {/* LEFT SIDE BUTTONS */}
              <Box className='flex md:flex-row gap-6 flex-col'>
                {herobannerButton.map((item, index) => {
                  return (
                    <Link 
                    key={index}
                    to={item.to}
                    activeClassName="selected"
                    activeStyle={{ color: '#bd321c' }}
                    smooth
                    >

                    <AppButton
                      buttonColor={item.color}
                      variant="contained"
                      buttonName={item.name}
                      style={{
                        width: '170px',
                        fontSize: "15px",
                        fontWeight: "600",
                        padding: "10px 20px",
                      }}
                    />
                    </Link>

                  );
                })}
              </Box>
              {/* END OF LEFT SIDE BUTTONS */}
              {/* SOCIAL ICONS */}
              <Box className='flex flex-col gap-4 items-center lg:flex-row'> 
                <p className='font-body text-md text-black font-medium'>For more info, follow us @</p>
                <Stack
                direction="row"
                style={{
                  display: "flex",
                  fontSize: "20px",
                  gap: "1rem",
                  alignItems: "center",
                }}>
                  <Box className="items-center justify-center mx-auto flex gap-4">
                {socialAccounts.map((item, index) => {
                  return (
                    <Link
                      to={item.link}
                      target="_blank"
                      key={index}
                      color={"inherit"}
                    >
                        {item.icon}
                    </Link>
                  );
                })}
                  </Box>
                </Stack>
              </Box>
                {/* SOCIAL ICONS END */}
          </Box>
          {/* HERO BANNER RIGHT SIDE */}
          <Box className='hidden w-1/2 lg:block'>
           <img src="https://img.pikbest.com/png-images/qiantu/isometric-business-technology-computer-finance-vector-free-deduction-png_2625359.png!c1024wm0" alt="" className='w-[100%]'/>
          </Box>
      </Box>
    </Box>
    <Box className="curve hidden lg:block"></Box>
    </>);
};

export default HeroBannerField;
