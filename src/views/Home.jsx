import React from 'react'
import ApplicationBar from '../components/Appbar/Appbar'
import AboutUs from './FrontPage/aboutus/AboutUs'
import Services from './FrontPage/services/Services'
import AppFooter from '../components/Footer/Footer'
import HeroBanner from './FrontPage/herobanner/HeroBanner'

const Home = () => {
    return (
        <>
            <ApplicationBar title={'Ecommerce'} />
            <HeroBanner/>
            <AboutUs/>
            <Services/>
            <AppFooter/>
        </>
    )
}

export default Home