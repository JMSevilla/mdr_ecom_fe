import React from 'react'
import { Box } from '@mui/material'
import { AppFooter, ApplicationBar, AppSwiper } from '../../components'
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { shopBannerData } from '../../core/utils/helper';
import ShopContent from './shopcontent';
import { motion } from 'framer-motion'
const ShopField = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
     <ApplicationBar title='Ecommerce' simplified/>
     <Box className='container mx-auto flex flex-col mt-32 gap-10'>
      {/* SHOP HEADER START*/}
        <Box className='flex flex-col bg-secondary items-center gap-6 lg:gap-2 lg:flex-row'>
            <Box className='flex flex-col w-full lg:w-1/4 text-center gap-0.5 lg:gap-4'>
            <h1 className='text-2xl font-logo font-semibold md:text-4xl'>Welcome to Modern Resolve Shops</h1>
            <h1 className='text-md font-body italic'>Feel free to view our products</h1>
            </Box>
            <Box className='w-full lg:w-3/4'>
            <AppSwiper
            swiperData={shopBannerData}
            style={{width:'100%', height: '220px'}}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            />
            </Box>
        </Box>
        {/* SHOP HEADER END*/}
        <hr className='text-gray'/>
        <ShopContent/>
      </Box>
      <AppFooter/>
    </motion.div>
  )
}

export default ShopField