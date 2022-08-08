import React from 'react'
import ApplicationBar from '../components/Appbar/Appbar'
import SystemContainer from '../components/Container/Container'
import Services from './FrontPage/services/Services'
import AppFooter from '../components/Footer/Footer'
import HeroBanner from './FrontPage/herobanner/HeroBanner'

const Home = () => {
    return (
        <>
        <div className='section'>
            <ApplicationBar title={'Ecommerce'} />
            <HeroBanner/>
            <SystemContainer maxWidth={'lg'}>
                <Services/>
            </SystemContainer>    
            <AppFooter/>
        </div>
        </>
    )
}

export default Home