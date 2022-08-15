import React from 'react'
import {Box} from '@mui/material';
import SystemTypography from '../../../components/Typography/Typography';
import AppButton from '../../../components/Buttons/Button';
import AboutUsOutlineText from '../../../assets/images/outline-text/about.svg';
import SystemContainer from '../../../components/Container/Container';
import Lottie from "react-lottie";
import * as aboutUsLogo from "../../../assets/images/aboutus/appDevelopment.json";
import { Fade } from "react-reveal";
import { missionAndVisionData } from '../../../core/utils/helper';

const style = {
    width: '450px',
    height: '450px'
  };
  const loadingAnimation = {
    loop: true,
    autoplay: true,
    animationData: aboutUsLogo.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

const AboutUs_field = () => {
  return (
    <>
        <Box id='about' style={{height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(255,255,255)'}}>
          <Box>
            <SystemContainer maxWidth={'lg'} style={{height: '90vh', display: 'flex'}}>
                <Box style={{display: 'flex', justifyContent: 'center', gap: '5rem', alignItems: 'center'}}>
                    <Box style={{display: 'flex', flexDirection: 'column', gap: '3rem', width: '50%'}}>
                        <Fade bottom>
                        <Box>
                        <img src={AboutUsOutlineText} alt='about us outline text' style={{width: '60%'}}/>
                        <SystemTypography variant={'h5'} text={'Who We Are?'}/>
                        </Box>
                            <Box style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}> 
                              {missionAndVisionData.map((item, index) => {
                                return (
                                  <>
                                  <Box style={{display: 'flex', alignItems: 'center', gap: '.5rem'}}>
                                    <SystemTypography variant='h4' text={item.title} style={{color: 'red', fontWeight: 600, fontFamily: 'Helvetica'}} key={index}/>
                                    {item.icon}
                                  </Box>
                                    <SystemTypography variant='h6' text={item.description} style={{textAlign: 'justify'}}/>
                                  </>
                                )
                              })}
                              </Box>
                        <Box style={{width:'23.8%'}}>
                        <AppButton variant='contained' buttonName='Read More' buttonColor='button-black' style={{fontSize: '15px',fontWeight: '600',padding: '10px 20px'}}/>
                        </Box>
                        </Fade>
                    </Box>
                    <Box>
                    <Fade right>
                    <Lottie
                        options={loadingAnimation}
                        style={style}
                        height={300}
                        width={300}
                        />
                    </Fade>
                    </Box>
                 </Box>
            </SystemContainer>
            </Box>
        </Box>
    </>
  )
}

export default AboutUs_field