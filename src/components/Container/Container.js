import React from 'react'
import { Container } from '@mui/material'


const SystemContainer = ({children, style, maxWidth}) => {
    
    return (
        <Container style={style} maxWidth={maxWidth}>

            {children}
        </Container>
    )
}

export default SystemContainer