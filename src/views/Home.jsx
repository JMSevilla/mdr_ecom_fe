import React from 'react'
import {ApplicationBar} from '../components'
import AboutUs from './FrontPage/aboutus/AboutUs'
import Services from './FrontPage/services/Services'
import AppFooter from '../components/Footer/Footer'
import HeroBanner from './FrontPage/herobanner/HeroBanner'
import ContactUs from './FrontPage/contactus/ContactUs'
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div initial={{opacity: 1}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <ApplicationBar title={'Ecommerce'} />
            <HeroBanner/>
            <AboutUs/>
            <Services/>
            <ContactUs/>
            <AppFooter/>
        </motion.div>
    )
}

export default Home