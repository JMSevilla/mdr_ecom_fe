import React from 'react'
import { Slider, Typography } from '@mui/material'

const SystemSlider = (props) => {
    const { defaultValue, step, title, max, min, value, sliderChange } = props

    return (
        <>
            <Typography gutterBottom>{title}</Typography>
            <Slider defaultValue={defaultValue}
             max={max} min={min}
              step={step} valueLabelDisplay="auto"
              value={value}
              onChange={(e, val) => sliderChange(val)}
              />
            
        </>
    )
}

export default SystemSlider