import React, {useCallback, useEffect, useState} from 'react'
import {ApplicationBar} from '../components'
import AboutUs from './FrontPage/aboutus/AboutUs'
import Services from './FrontPage/services/Services'
import AppFooter from '../components/Footer/Footer'
import HeroBanner from './FrontPage/herobanner/HeroBanner'
import ContactUs from './FrontPage/contactus/ContactUs'
import Testimonials from './FrontPage/testimonials/Testimonials'
import FormService from '../core/service/apiservice'
import { useHistory } from 'react-router-dom'
import { appRouter } from '../routes/router'

const Home = () => {
    const history = useHistory()
    const [callback, setCallback] = useState('')
    const checkadmin = useCallback(() => {
        FormService.ADMINISTRATOR_checkadmin().then(res => {
            setCallback(res.data.message)
        })
    },[])
    useEffect(() => {
        checkadmin()
        if(callback === 'not_exist'){
            history.push(appRouter.AdminRegistration.path)
        }
    }, [callback])
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