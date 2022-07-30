import React from 'react'
import {TextField, Typography} from '@mui/material'

const AppTextField = (props) => {
    const { value, handleChange, placeholder, label, variant, style  } = props

    return ( 
        <>
            <Typography gutterBottom>{label}</Typography>
            <TextField
            value={value}
            style={style}
            placeholder={placeholder}
            onChange={handleChange}
            variant={variant}
            ></TextField>
        </>
    )
}

export default AppTextField