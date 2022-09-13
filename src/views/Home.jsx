import React, {useContext, useEffect} from 'react'
import {ApplicationBar} from '../components'
import AboutUs from './FrontPage/aboutus/AboutUs'
import Services from './FrontPage/services/Services'
import AppFooter from '../components/Footer/Footer'
import HeroBanner from './FrontPage/herobanner/HeroBanner'
import ContactUs from './FrontPage/contactus/ContactUs'
import Testimonials from './FrontPage/testimonials/Testimonials'
import { GlobalContext } from '../core/context/GlobalContext'
const Home = () => {
    const contextValues = useContext(GlobalContext)
    const { tokenScanned } = contextValues
    useEffect(() => {
        tokenScanned(1)
    }, [])
    return (
        <div>
            <ApplicationBar title={'Ecommerce'}/>
            <HeroBanner/>
            <AboutUs/>
            <Services/>
            <Testimonials />
            <ContactUs/>
            <AppFooter/>
        </div>
    )
}

export default Home