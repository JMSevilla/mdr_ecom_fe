import React from 'react'
import { Container } from '@mui/material'


const SystemContainer = ({children, style, className, maxWidth}) => {
    
    return (
        <Container style={style} className={className} maxWidth={maxWidth}>

            {children}
        </Container>
    )
}

export default SystemContainer