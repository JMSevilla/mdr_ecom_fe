import React from 'react'
import {TextField, Typography} from '@mui/material'

const AppTextField = (props) => {
    const { value, handleChange, placeholder, label, variant, style,
    ismultiLine, rows, iserror, texthelper, type, disabled, className, testid} = props

    return ( 
        <>
            <Typography gutterBottom>{label}</Typography>
            <TextField
            className={className}
            disabled={disabled}
            type={type}
            value={value}
            style={style}
            placeholder={placeholder}
            onChange={handleChange}
            variant={variant}
            multiline={ismultiLine}
            rows={rows}
            id={iserror ? 'outlined-error-helper-text' : 'outlined-basic'}
            error={iserror}
            helperText={texthelper}
            inputProps={{"data-testid" : testid}}
            ></TextField>
        </>
    )
}

export default AppTextField