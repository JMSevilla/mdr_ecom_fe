import React from 'react'
import ApplicationBar from '../components/Appbar/Appbar'
import SystemContainer from '../components/Container/Container'
import Services from './FrontPage/services/Services'

const Home = () => {
    return (
        <>
            <ApplicationBar title={'Ecommerce'} />
            <SystemContainer style={{marginTop: '150px'}}>
                <Services/>
            </SystemContainer>    
        </>
    )
}

export default Home