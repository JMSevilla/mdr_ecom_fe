import React from "react";
import { Box } from "@mui/system";
import Rating from '@mui/material/Rating';

const AppSwiper = (props) => {
  const {swiperData, testimonials, style} = props
  return (
    <>
     <div class="carousel" data-flickity='{ "autoPlay": 5000}'>
      {swiperData.map((item, index) => {
      return (
          <>
          <div class="carousel-cell" key={index}>
            {testimonials ? (
              <>
              <Box className='gap-8 mt-30 mx-6 md:flex'>
            <img src={item.img} alt="hero_banner_images" className='rounded w-full' />
              <Box className='flex flex-col gap-6'>
                <h1 className="text-base mt-4 font-body text-black italic text-justify lg:text-lg lg:mt-0"> {item.feedbackDisc} </h1>
                <Box className='flex flex-col mb-5' >               
                <h1 className='font-subtitle font-bold text-red-600' > {item.creator} </h1>
                <h1 className='font-body text-black'> {item.profession} </h1>
                <Rating defaultValue={item.ratingValue} precision={item.ratingPrecision} readOnly/>
                </Box>   
              </Box>
            </Box> 
              </>
            ): (<>
             <img src={item.img} alt="hero_banner_images" style={style}/>
            </>)}
          </div>  
       </>
      )
  })}
</div>
    </>
  );
};

export default AppSwiper;
