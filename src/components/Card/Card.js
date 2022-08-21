import React from 'react'
import {Card} from '@mui/material'

const ApplicationCard = (props) => {
    const { 
        children,
         style,
         sx,
        cardmedia,
        className,
        ref
        } = props
    return (
        <>
            <Card ref={ref} sx={sx} style={style} className={className}>
                <center>
                {cardmedia}
                </center>
                {children}
            </Card>
        </>
    )
}

export default ApplicationCard