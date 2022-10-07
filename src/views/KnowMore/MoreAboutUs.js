import React from 'react'
import { Box } from '@mui/material'
import { missionVisionCoreValuesData } from '../../core/utils/helper';
import mission from '../../assets/images/aboutus/mission.svg';
import vision from '../../assets/images/aboutus/vision.svg';
import values from '../../assets/images/aboutus/values.svg';
const MoreAboutUs = () => {
  return (
    <Box className='flex flex-col justify-center items-center text-center mb-12'>
      <Box>
       <h3 className='font-subtitle text-4xl font-medium uppercase md:text-6xl'>About Us</h3>
       <h3 className='font-main text-2xl font-medium capitalize italic'>Who we are?</h3>
      </Box> 
      {missionVisionCoreValuesData.map((item,index) => {
        const {title, description, img, position} = item;
        return (
          <>
          {position === 'right' ? (<>
            <h1 className='text-3xl mb-8 font-main font-bold mt-8 lg:mb-0' key={index}>Our Vision</h1>
            <Box className='flex flex-col w-[90%] justify-around items-center lg:flex-row px-10 gap-4 lg:gap-0'>
                <Box className='w-full lg:w-1/2 order-2 lg:order-1'>
                <p className='text-xl lg:text-2xl font-main text-justify tracking-tighter mb-4 lg:mb-0'>To become a prime performer, in providing quality Web, Print and Software solutions in the competitive Local market place.</p>
                </Box>
                <Box className='flex justify-center text-center order-1 lg:order-2'>
                <img src={vision} alt='mission' style={{ height: 280, width: 280 }}/>
                </Box>
            </Box>
          </>):(<>
            <h1 className='text-2xl mb-8 font-main font-bold mt-8 lg:mb-0 md:text-3xl' key={index}>{title}</h1>
            <Box className='flex flex-col w-[90%] justify-around items-center lg:flex-row px-10 gap-4 lg:gap-0'>
                <Box className='flex justify-center text-center'>
                <img src={img} alt='mission' style={{ height: 280, width: 280 }}/>
                </Box>
                <Box className='w-full lg:w-1/2'>
                <p className='text-xl lg:text-2xl font-main text-justify tracking-tighter mb-4 lg:mb-0'>{description}</p>
                </Box>
            </Box>
          </>)}
          </>
        )
      })}
    </Box>
  )
}

export default MoreAboutUs