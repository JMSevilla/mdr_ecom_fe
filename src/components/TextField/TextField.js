import React from 'react'
import {TextField, Typography} from '@mui/material'

const AppTextField = (props) => {
    const { value, handleChange, placeholder, label, variant, style, type} = props

    return ( 
        <>
            <Typography gutterBottom>{label}</Typography>
            <TextField
            type={type}
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