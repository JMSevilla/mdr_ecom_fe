import React from 'react'
import { InputLabel, MenuItem, FormControl, Select, Typography, FormHelperText,
Box, Chip } from '@mui/material'
import {makeStyles} from '@mui/styles'


const SystemSelect = (props) => {
    const {
        value,
        handleSelect,
        selectionArray,
        selectionLabel,
        selectionTitle,
        isError = false,
        placeholder,
        handleRenderedValue,
        multiple = false,
        isChip = false,
        formHelperMessage
     } = props

     const HelperText = () => {
        if(isError) {
            return (
                <>
                    <FormHelperText>{formHelperMessage}.</FormHelperText>
                </>
            )
        } else {return(<></>)}
     }
     
}