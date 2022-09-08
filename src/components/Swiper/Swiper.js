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
  const { swiperData, style, modules, testimonial, className} = props;
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
        className={className}
      >
        {swiperData.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
            >
              {testimonial ? (
              <>
              <Box className='md:flex gap-3 mb-50 mt-30 mx-5 md:mx-6 '>
              <img src={item.img} alt="hero_banner_images" className={className} />
                <Box className='flex flex-col gap-6 mt-5 md:mt-20'>
                  <Typography className="text-xl font-serif italic text-justify  "> {item.feedbackDisc} </Typography>
                  <Box className='flex flex-col mb-5' >               
                  <Typography className='font-semibold text-red-600' > {item.creator} </Typography>
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
