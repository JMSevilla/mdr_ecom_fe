import React, {useContext, useEffect} from 'react'
import {ApplicationBar} from '../components'
import AboutUs from './FrontPage/aboutus/AboutUs'
import Services from './FrontPage/services/Services'
import AppFooter from '../components/Footer/Footer'
import HeroBanner from './FrontPage/herobanner/HeroBanner'
import ContactUs from './FrontPage/contactus/ContactUs'
import Testimonials from './FrontPage/testimonials/Testimonials'
import { GlobalContext } from '../core/context/GlobalContext'
import { localstoragehelper } from '../core/utils/storage'
const Home = () => {
    const contextValues = useContext(GlobalContext)
    const { tokenScanned, adminScanned } = contextValues
    useEffect(() => {
        adminScanned()
        const __key__ = localstoragehelper.load('key_identifier')
        if(__key__ == null || __key__ == undefined
        || __key__ == 'unknown'){}
        else{tokenScanned(0)}
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