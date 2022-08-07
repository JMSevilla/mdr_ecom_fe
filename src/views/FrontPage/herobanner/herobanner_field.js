import React from "react";
import AppSwiper from "../../../components/Swiper/Swiper";
import { heroBannerData } from "../../../core/utils/helper";
import SystemContainer from "../../../components/Container/Container";
import SystemTypography from "../../../components/Typography/Typography";
import { Box } from "@mui/material";
import AppButton from "../../../components/Buttons/Button";

const HeroBannerField = () => {
  return (
    <Box id="home" style={{display: "flex", justifyContent: "center"}}>
      <AppSwiper
        swiperData={heroBannerData}
        style={{ width: "100vw", height: "100vh", filter: "blur(7px)"}}
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
          <AppButton
            variant="contained"
            buttonName={"Learn More"}
            style={{
              fontSize: "15px",
              fontWeight: "600",
              backgroundColor: "white",
              color: "black",
              padding: "10px 20px",
            }}
          />
          <AppButton
            variant="contained"
            buttonName={"Pricing"}
            style={{
              fontSize: "15px",
              fontWeight: "600",
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
            }}
          />
        </Box>
      </SystemContainer>
    </Box>
  );
};

export default HeroBannerField;
