import React from 'react'
import { Slider, Typography } from '@mui/material'

const SystemSlider = (props) => {
    const { defaultValue, step, title, max, min, value, sliderChange, intlPrice } = props

    return (
        <>
            <Typography gutterBottom>{title} : {intlPrice}</Typography>
            <Slider defaultValue={defaultValue}
             max={max} min={min}
              step={step} 
              value={value}
              onChange={(e, val) => sliderChange(val)}
              />
            
        </>
    )
}

export default SystemSlider