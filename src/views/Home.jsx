import React from 'react'
import ApplicationBar from '../components/Appbar/Appbar'
import SystemContainer from '../components/Container/Container'
import Services from './FrontPage/services/Services'
import AppFooter from '../components/Footer/Footer'
import HeroBanner from './FrontPage/herobanner/HeroBanner'

const Home = () => {
    return (
        <>
            <ApplicationBar title={'Ecommerce'} />
            <HeroBanner/>
            <SystemContainer maxWidth={'lg'}>
                <Services/>
            </SystemContainer>    
            <AppFooter/>
        </>
    )
}

export default Home