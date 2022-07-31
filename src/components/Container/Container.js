import React from 'react'
import { Container } from '@mui/material'

const SystemContainer = ({children, style}) => {
    
    return (
        <Container style={style}>
            {children}
        </Container>
    )
}

export default SystemContainer