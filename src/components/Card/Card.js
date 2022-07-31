import React from 'react'
import {Card} from '@mui/material'

const ApplicationCard = (props) => {
    const { 
        children,
         style,
         sx,
        cardmedia
        } = props
    return (
        <>
            <Card sx={sx} style={style}>
                <center>
                {cardmedia}
                </center>
                {children}
            </Card>
        </>
    )
}

export default ApplicationCard