import { Box } from "@mui/system";
import React from "react";
import testimonialOutline from "../../../assets/images/outline-text/testimonials.svg"
import { AppSwiper, SystemContainer, SystemTypography  } from "../../../components";
import { testimonialData } from "../../../core/utils/helper";
import { Navigation, Pagination, Autoplay } from "swiper";

const testimonials_field = () =>{
    return(
        <>
        <Box id="testimonials" className='sm:h-[80vh] flex flex-col justify-center bg-secondary'>
                <SystemContainer maxWidth={'lg'}>
                        <Box className='flex flex-col items-center gap-5'>
                        <img src={testimonialOutline} alt='testimonial outline text' className='w-65 hidden sm:block' />
                            <SystemTypography text={"What other people says?"} variant={'h5'} />
                            <SystemTypography variant={'subtitle'} text={"Here are some of our client's feedback..."} isgutter={true} style={{fontStyle: 'italic', marginBottom: '50px'}}/>
                        </Box>
                    <Box style={{display: "flex"}}>
                            <AppSwiper
                            testimonial={true}
                            swiperData={testimonialData}
                            // style={{width:'80%', height: '90%', borderRadius: '20px'}}
                            modules={[Autoplay,Pagination,Navigation]}
                            className='w-80 h-95 rounded sm:w-full'
                            />
                           
                        </Box>
                </SystemContainer>
        </Box>
        </>

    )
}

export default testimonials_field