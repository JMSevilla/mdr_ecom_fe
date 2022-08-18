import React from "react";
import AppSwiper from "../../../components/Swiper/Swiper";
import { herobannerButton, heroBannerData } from "../../../core/utils/helper";
import {SystemContainer, SystemTypography, AppButton} from "../../../components";
import { Box } from "@mui/material";
import { Link } from "react-scroll";
import { Autoplay, EffectFade, Navigation } from "swiper";

const HeroBannerField = () => {
  return (
    <Box id="home" style={{display: "flex", justifyContent: "center"}}>
      <AppSwiper
        swiperData={heroBannerData}
        style={{ width: "100vw", height: "100vh", filter: "blur(7px)"}}
        modules={[EffectFade, Autoplay, Navigation]}
      />
      <SystemContainer
        maxWidth={'lg'}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "absolute",
          top: 0,
          marginTop: "10%",
          height: "60vh",
          gap: "5rem",
          zIndex: 1
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <SystemTypography
            text={
              "We're here to create meaningful and lasting relationship with or clients"
            }
            variant={"h6"}
            style={{ fontStyle: "italic", fontWeight: '500'}}
          />
          <SystemTypography
            text={"Let's build something amazing together"}
            variant={"h1"}
            style={{ lineHeight: "90%", textShadow: '2px 5px #FFFFFF', fontFamily: 'Georgia'}}
          />
        </Box>
        <Box style={{ display: "flex", gap: "1.5rem" }}>
          {herobannerButton.map((item, index) => {
            return (
              <Link 
              to={item.to} 
              activeClass='active' 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-70}>

              <AppButton
                buttonColor={item.color}
                variant="contained"
                buttonName={item.name}
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  padding: "10px 20px",
                }}
              />
              </Link>

            );
          })}
        </Box>
      </SystemContainer>
    </Box>
  );
};

export default HeroBannerField;
