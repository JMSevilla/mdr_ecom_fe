import React from 'react'
import ApplicationBar from '../components/Appbar/Appbar'
import {Container} from '@mui/material'
import Services from '../pages/Homepage/Services/Services'
const Home = () => {
    return (
        <>
            <ApplicationBar title={'Ecommerce'} />
            <Container style={{marginTop: '150px'}}>
                <Services/>
            </Container>    
        </>
    )
}

export default Home