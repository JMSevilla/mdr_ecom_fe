import React from 'react'
import {TextField, Typography} from '@mui/material'

const AppTextField = (props) => {
    const { value, handleChange, placeholder, label, variant, style,
    ismultiLine, rows, iserror, helpertext, inputProps  } = props

    return ( 
        <>
            <Typography gutterBottom>{label}</Typography>
            <TextField
            inputProps={{'data-testid' : 'InputBusinessFirstname'}}
            value={value}
            style={style}
            placeholder={placeholder}
            onChange={handleChange}
            variant={variant}
            multiline={ismultiLine}
            rows={rows}
            id={ismultiLine ? 'outlined-multiline-static' : iserror ? 'outlined-error-helper-text' : ''}
            error={iserror}
            helperText={helpertext}
            ></TextField>
        </>
    )
}

export default AppTextField