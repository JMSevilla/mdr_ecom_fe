import React from 'react'
import { Container } from '@mui/material'

const SystemContainer = ({children, style, max}) => {
    
    return (
        <Container maxWidth={max} style={style}>
            {children}
        </Container>
    )
}

export default SystemContainer