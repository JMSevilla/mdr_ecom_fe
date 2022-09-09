import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
// import required modules
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const AppSwiper = (props) => {
  const { swiperData, style, modules, testimonial} = props;
  return (
    <>
      <Swiper
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={modules}
        loop={true}
        className="mySwiper"
      >
        {swiperData.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
            >
              {testimonial ? (
              <>
              <Box style={{display: "flex" , gap: '6rem', marginBottom: '50px', marginTop: '30px'}}>
              <img src={item.img} alt="hero_banner_images" style={style} />
                <Box style={{display: 'flex', flexDirection: "column", gap: '2rem' }}>
                  <Typography style={{fontSize: '20px', marginTop: '20px',fontFamily: 'Georgia' , fontStyle: 'italic', textAlign: 'justify'}}> {item.feedbackDisc} </Typography>
                  <Box style={{display: 'flex', flexDirection: 'column'}}>               
                  <Typography style={{fontWeight: 600, color: 'red'}}> {item.creator} </Typography>
                  <Typography> {item.profession} </Typography>
                  </Box>   
                </Box>
              </Box>  
              </>
              ):(
              <>
              <img src={item.img} alt="hero_banner_images" style={style} />
              </>)}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default AppSwiper;
