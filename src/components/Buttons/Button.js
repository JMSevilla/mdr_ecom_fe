import React from 'react'
import {Button} from '@mui/material'

const AppButton = (props) => {
    const { buttonName, handleClick, variant, size, style, color, testid } = props
    return (
        <>
            <Button
            variant={variant}
            style={style}
            onClick={handleClick}
            size={size}
            color={color}
            data-testid={testid}
            >{buttonName}</Button>
        </>
    )
}

export default AppButton