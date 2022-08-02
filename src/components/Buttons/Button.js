import React from 'react'
import {Button} from '@mui/material'

const AppButton = (props) => {
    const { buttonName, handleClick, variant, size, style, color, testid, sx, disabled } = props
    return (
        <>
            <Button
            variant={variant}
            style={style}
            onClick={handleClick}
            size={size}
            color={color}
            data-testid={testid}
            disabled={disabled}
            sx={sx}
            >{buttonName}</Button>
        </>
    )
}

export default AppButton