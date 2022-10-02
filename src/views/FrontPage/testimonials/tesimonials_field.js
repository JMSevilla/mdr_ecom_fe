import { Box } from "@mui/system";
import React from "react";
import testimonialOutline from "../../../assets/images/outline-text/testimonials.svg"
import { AppSwiper, SystemTypography  } from "../../../components";
import { testimonialData } from "../../../core/utils/helper";
import { Navigation, Pagination, Autoplay } from "swiper";

const testimonials_field = () =>{
    return(
        <>
        <Box id="testimonials" className='section md:h-[70vh] h-auto flex flex-col justify-center bg-secondary'>
             <Box className='container mx-auto'> 
                        <Box className='flex flex-col items-center text-center'>
                        <img src={testimonialOutline} alt='about us outline text' className='hidden sm:block'/>
                        <h5 className='text-3xl font-semibold sm:text-2xl'>What Other People Says?</h5>
                        <SystemTypography variant={'subtitle'} text={"Here are some of our client's feedback..."} isgutter={true} style={{fontStyle: 'italic', marginBottom: '50px'}}/>
                        </Box>
                    <Box style={{display: "flex"}}>
                            <AppSwiper
                            testimonial={true}
                            swiperData={testimonialData}
                            modules={[Autoplay,Pagination,Navigation]}
                            className='rounded w-full'
                            />
                           
                        </Box>
             </Box>
        </Box>
        </>

    )
}

export default testimonials_field