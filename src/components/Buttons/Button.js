import React from 'react'
import {Button} from '@mui/material'

const AppButton = (props) => {
    const { buttonName, handleclick, variant, size, style } = props
    return (
        <>
            <Button
            variant={variant}
            style={style}
            onClick={handleclick}
            size={size}
            >{buttonName}</Button>
        </>
    )
}

export default AppButton