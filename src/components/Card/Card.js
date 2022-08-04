import React from 'react'
import {Card} from '@mui/material'

const ApplicationCard = (props) => {
    const { 
        children,
         style,
         sx,
        cardmedia,
        ref
        } = props
    return (
        <>
            <Card ref={ref} sx={sx} style={style}>
                <center>
                {cardmedia}
                </center>
                {children}
            </Card>
        </>
    )
}

export default ApplicationCard