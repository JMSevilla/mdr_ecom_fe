import React from 'react'
import ApplicationBar from '../components/Appbar/Appbar'
import SystemContainer from '../components/Container/Container'
import Services from './FrontPage/services/Services'
import AppFooter from '../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <ApplicationBar title={'Ecommerce'} />
            <SystemContainer style={{marginTop: '150px'}}>
                <Services/>
            </SystemContainer>    
            <AppFooter/>
        </>
    )
}

export default Home