import React from 'react'
import ApplicationBar from '../components/Appbar/Appbar'
import {Container} from '@mui/material'

const Home = () => {
    return (
        <>
            <ApplicationBar title={'Ecommerce'} />
            <Container style={{marginTop: '100px'}}>
                test
            </Container>    
        </>
    )
}

export default Home