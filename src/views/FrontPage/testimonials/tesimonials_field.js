import { Box } from "@mui/system";
import React from "react";
import testimonialOutline from "../../../assets/images/outline-text/testimonials.svg"
import { AppSwiper, SystemContainer, SystemTypography  } from "../../../components";
import { testimonialData } from "../../../core/utils/helper";
import { Navigation, Pagination, Autoplay } from "swiper";

const testimonials_field = () =>{
    return(
        <>
        <Box id="testimonials" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(253,249,255)'}}>
                <SystemContainer maxWidth={'lg'}>
                        <Box style={{display: 'flex', flexDirection: 'column',  alignItems: 'center', gap: '1rem'}}>
                        <img src={testimonialOutline} alt='testimonial outline text' style={{width: "65%"}} />
                            <SystemTypography text={"What other people says?"} variant={'h5'} />
                            <SystemTypography variant={'subtitle'} text={"Here are some of our client's feedback..."} isgutter={true} style={{fontStyle: 'italic', marginBottom: '50px'}}/>
                        </Box>
                    <Box style={{display: "flex", alignItems: 'left',}}>
                            <AppSwiper
                            swiperData={testimonialData}
                            style={{width:"25vw"}}
                            modules={[Autoplay,Pagination,Navigation]}
                            />
                           
                        </Box>
                </SystemContainer>
        </Box>
        </>

    )
}

export default testimonials_field