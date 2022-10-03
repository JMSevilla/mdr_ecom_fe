import { Box } from "@mui/system";
import React from "react";
import testimonialOutline from "../../../assets/images/outline-text/testimonialsWhite.svg"
import { SystemTypography, AppSwiper  } from "../../../components";
import { testimonialData } from "../../../core/utils/helper";
const testimonials_field = () =>{

    return(
        <>
        <Box id="testimonials" className='section md:h-[70vh] h-auto flex flex-col justify-center bg-sideBar'>
             <Box className='container mx-auto'> 
                        <Box className='flex flex-col items-center text-center'>
                        <img src={testimonialOutline} alt='about us outline text' className='hidden sm:block'/>
                        <h5 className='text-3xl text-white font-semibold sm:text-2xl'>What Other People Says?</h5>
                        <SystemTypography variant={'subtitle'} text={"Here are some of our client's feedback..."} isgutter={true} style={{fontStyle: 'italic', marginBottom: '50px', color: 'white'}}/>
                        </Box>
                    <AppSwiper testimonials swiperData={testimonialData}/>
             </Box>
        </Box>
        </>

    )
}

export default testimonials_field