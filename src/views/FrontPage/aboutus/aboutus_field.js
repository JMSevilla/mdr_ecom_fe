import React from 'react'
import {Box} from '@mui/material';
import {AppButton} from '../../../components';
import AboutUsOutlineText from '../../../assets/images/outline-text/aboutWhite.svg';
import { Fade } from "react-reveal";
import { missionAndVisionData } from '../../../core/utils/helper';
import AboutUsImage from '../../../assets/images/aboutus/aboutUsImage.png';

const AboutUs_field = () => {
  return (
    <>
        <section id='about' className='section h-auto flex flex-col items-center justify-center bg-sideBar'>
          <Box className='container mx-auto my-auto'>
            {/* ABOUT US CONTENT */}
                <Box className='flex justify-between gap-12 text-center items-center sm:text-left'>
                   {/* Left Side Content  */}
                    <Box className='bounce hidden lg:block'>
                        <img src={AboutUsImage} alt="" className="bounce w-[80%]" />
                     </Box>
                    {/* End of right side content */}
                    
                        {/* Right Side Content  */}
                        <Box className='flex flex-col gap-8 lg:w-[50%] w-full lg:gap-12'>
                        <Fade bottom>
                        <Box className='flex flex-col items-center'>
                        <img src={AboutUsOutlineText} alt='about us outline text' className='hidden sm:block'/>
                        <h5 className='text-3xl text-white font-semibold sm:text-2xl'>Who We Are?</h5>
                        </Box>
                              {missionAndVisionData.map((item, index) => {
                                return (
                                  <>
                                  <Box className='flex flex-col gap-2 text-center items-center lg:items-start'>
                                    <Box className='flex items-center gap-4'>
                                      <h5 className='text-2xl text-white font-semibold font-body lg:text-3xl' key={index}>{item.title}</h5>
                                      {item.icon}
                                    </Box>
                                    <h5 className='text-xl tracking-tighter text-white text-justify font-body lg:text-2xl'>{item.description}</h5>
                                  </Box>
                                  </>
                                )
                              })}
                        <Box className='w-full md:w-[23.8%]'>
                        <AppButton variant='contained' buttonName='Read More' buttonColor='button-white' style={{fontSize: '15px',fontWeight: '600',padding: '10px 20px'}}/>
                        </Box>
                        </Fade>
                    </Box>
                    {/* End of right side content */}
                 </Box>
            </Box>
        </section>
    </>
  )
}

export default AboutUs_field