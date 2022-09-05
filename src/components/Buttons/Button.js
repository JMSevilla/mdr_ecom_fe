import React from 'react'
import {Button} from '@mui/material'

const AppButton = (props) => {
    const { buttonName, buttonColor, handleClick, variant, size, style, color, testid, sx, disabled, key } = props
    return (
        <div className={buttonColor}>
            <Button
            key={key}
            variant={variant}
            style={style}
            onClick={handleClick}
            size={size}
            color={color}
            data-testid={testid}
            disabled={disabled}
            sx={sx}
            >{buttonName}</Button>
        </div>
    )
}

export default AppButton