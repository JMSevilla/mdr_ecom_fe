import React, {useEffect} from 'react'
import { Box } from '@mui/material'
import { AppFooter, ApplicationBar } from '../../components'
import KnowMoreImage from '../../assets/images/aboutus/knowmore.jpg';
import { mdrTeamData } from '../../core/utils/helper';
import MoreAboutUs from './MoreAboutUs';
const KnowMoreField = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <Box> 
        <ApplicationBar title={'Ecommerce'} simplified/>
        <img src={KnowMoreImage} alt='Hero Banner' className='relative w-full h-[30vh] mt-20'/>
        <Box className='container mx-auto flex flex-col justify-center w-full mt-12 mb-12'>
            <MoreAboutUs/>
            <Box className='flex flex-col justify-center items-center gap-12 mt-12'>
                <Box>
                    <h3 className='font-subtitle text-3xl font-medium uppercase md:text-5xl'>Meet Our Team</h3>
                </Box>
                <Box className='lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-2 lg:gap-16 sm:gap-20'>
                    {mdrTeamData.map((item, index) => {
                        return (
                            <>
                            <Box className='flex flex-col items-center mb-12 lg:mb-2'>
                            <img src={item.img} alt={item.name} className='border-4 border-black p-2 rounded-full h-[200px] w-[200px] block' key={index}/>
                            <p className='bg-white text-black font-bold font-main w-[90%] rounded-lg text-center py-1 mt-[-20px] shadow-lg shadow-gray-500/50'>{item.name}</p>
                            <h1 className='text-lg font-medium text-accent font-main mt-2 text-center'>{item.title}</h1>
                            </Box>
                            </>
                        )
                    })}
                </Box>
            </Box>
        </Box>
        <AppFooter/>
    </Box>
  )
}

export default KnowMoreField