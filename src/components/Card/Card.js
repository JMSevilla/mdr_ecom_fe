import React from 'react'
import {Card} from '@mui/material'

const ApplicationCard = ({children}) => {
    return (
        <>
            <Card>
                {children}
            </Card>
        </>
    )
}

export default ApplicationCard