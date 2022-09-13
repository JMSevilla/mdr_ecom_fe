import React from 'react'
import {Box} from '@mui/material';
import {AppButton} from '../../../components';
import AboutUsOutlineText from '../../../assets/images/outline-text/about.svg';
import Lottie from "react-lottie";
import * as aboutUsLogo from "../../../assets/images/aboutus/appDevelopment.json";
import { Fade } from "react-reveal";
import { missionAndVisionData } from '../../../core/utils/helper';

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
        <section id='about' className='section h-auto flex flex-col items-center justify-center bg-primary'>
          <Box className='container mx-auto my-auto'>
            {/* ABOUT US CONTENT */}
                <Box className='flex justify-between text-center items-center sm:text-left'>
                  {/* Left Side Content  */}
                    <Box className='flex flex-col gap-8 lg:w-[50%] w-full lg:gap-12'>
                        <Fade bottom>
                        <Box>
                        <img src={AboutUsOutlineText} alt='about us outline text' className='hidden sm:block'/>
                        <h5 className='text-3xl font-semibold sm:text-2xl'>Who We Are?</h5>
                        </Box>
                              {missionAndVisionData.map((item, index) => {
                                return (
                                  <>
                                  <Box className='flex flex-col gap-2 text-center items-center sm:items-start sm:text-left'>
                                    <Box className='flex items-center gap-4'>
                                      <h5 className='text-2xl text-accent font-semibold font-body lg:text-3xl' key={index}>{item.title}</h5>
                                      {item.icon}
                                    </Box>
                                    <h5 className='text-xl tracking-tighter text-justify font-body lg:text-2xl'>{item.description}</h5>
                                  </Box>
                                  </>
                                )
                              })}
                        <Box className='w-full md:w-[23.8%]'>
                        <AppButton variant='contained' buttonName='Read More' buttonColor='button-black' style={{fontSize: '15px',fontWeight: '600',padding: '10px 20px'}}/>
                        </Box>
                        </Fade>
                    </Box>
                    {/* End of left side content */}
                    <Box className='hidden lg:block'>
                    <Fade right>
                      {/* Right Side Content */}
                    <Lottie
                        options={loadingAnimation}
                        height={450}
                        width={450}
                        />
                    </Fade>
                    </Box>
                 </Box>
            </Box>
        </section>
    </>
  )
}

export default AboutUs_field