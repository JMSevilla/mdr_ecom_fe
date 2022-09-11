import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
// import required modules
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
              <Box className='gap-8 mb-50 mt-30 mx-6 md:flex'>
              <img src={item.img} alt="hero_banner_images" className={className} />
                <Box className='flex flex-col gap-6'>
                  <h1 className="text-base mt-4 font-body italic text-justify lg:text-lg lg:mt-0"> {item.feedbackDisc} </h1>
                  <Box className='flex flex-col mb-5' >               
                  <h1 className='font-semibold text-red-600' > {item.creator} </h1>
                  <h1 className='font-body'> {item.profession} </h1>
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
