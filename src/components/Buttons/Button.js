import React from 'react'
import {Button} from '@mui/material'

const AppButton = (props) => {
    const { buttonName, handleClick, variant, size, style, color } = props
    return (
        <>
            <Button
            variant={variant}
            style={style}
            onClick={handleClick}
            size={size}
            color={color}
            >{buttonName}</Button>
        </>
    )
}

export default AppButton