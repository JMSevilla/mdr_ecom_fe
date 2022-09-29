import React from "react";
// import AppSwiper from "../../../components/Swiper/Swiper";
import { herobannerButton, heroBannerData } from "../../../core/utils/helper";
import {AppButton} from "../../../components";
import { Box } from "@mui/material";
import { NavHashLink as Link } from 'react-router-hash-link';

const HeroBannerField = () => {
  return (
    <Box id="home" className='flex justify-center items-center'>
      {/* <AppSwiper
        swiperData={heroBannerData}
        style={{ width: "100vw", height: "100vh", filter: "blur(7px)"}}
        modules={[EffectFade, Autoplay, Navigation]}
      /> */}
      <Box className='container mx-auto my-auto flex flex-col justify-center items-center text-center gap-12 absolute z-10'>
        <Box className='flex flex-col gap-6'>
          <h5 className='italic text-lg font-body font-medium lg:text-2xl'>
            We're here to create meaningful and lasting relationship with our clients
          </h5>
          <h5 className='text-6xl leading-none lg:text-8xl' style={{fontFamily: 'Georgia', textShadow: '2px 5px #FFFFFF'}}>
            Let's build something amazing together
          </h5>
        </Box>
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
                  width: '150px',
                  fontSize: "15px",
                  fontWeight: "600",
                  padding: "10px 20px",
                }}
              />
              </Link>

            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBannerField;
