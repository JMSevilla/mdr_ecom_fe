import React from 'react'
import { Typography } from '@mui/material'

const SystemTypography = (props) => {
    const { variant, component, isgutter, display, text, style } = props

    return (
        <>
            <Typography
            style={style}
            variant={variant}
            component={component}
            gutterBottom={isgutter ? true : false}
            display={display}
            >
                {text}
            </Typography>
        </>
    )
}

export default SystemTypography