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
        formHelperMessage,
        style,
        disabled,
        className
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
     const usePlaceholderStyles = makeStyles(theme => ({
        placeholder: {
          color: "#aaa"
        }
    }));

    const Placeholder = ({children}) => {
        const classes = usePlaceholderStyles();
        return <div className={classes.placeholder}>{children}</div>
    }

    return (
        <FormControl fullWidth error={isError}>
            {
                multiple ? 
                <>
                    <Typography gutterBottom>
                        {selectionTitle}
                    </Typography>
                    <InputLabel id="demo-multiple-chip-label">Choose software category</InputLabel>
                </> 
                : 
                <>
                    <Typography gutterBottom>
                        {selectionTitle}
                    </Typography>
                </>
            }
           {
            multiple ? 
            <Select
            className={className}
            disabled={disabled}
            fullWidth
            id={isChip ? 'demo-multiple-chip' : isError ? 'demo-simple-select-error' : 'demo-simple-select-error'}
            value={value}
            label={selectionLabel}
            onChange={handleSelect}
            multiple={multiple}
            displayEmpty
            style={style}
            labelId={multiple ? 'demo-multiple-chip-label' : isError ? 'demo-simple-select-error-label' : 'demo-simple-select-error-label'}
            renderValue={
                multiple ?
                (selected) => (
                    <Box sx={{display : 'flex', flexWrap : 'wrap', gap: 0.5}}>
                        {selected.map((value) => {
                            return (
                                <>
                                    <Chip key={value} value={value} label={value} />
                                </>
                            )
                        })}
                    </Box>
                )
                : handleRenderedValue !== '' ? undefined : () => <Placeholder>{placeholder}</Placeholder>
            }
            ></Select>
            :
            <Select
            className={className}
            disabled={disabled}
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={value}
            label={'selectionLabel'}
            onChange={handleSelect}
            placeholder={placeholder}
            style={style}
            renderValue={
               handleRenderedValue !== '' ? undefined : () => <Placeholder>{placeholder}</Placeholder>
            }
            >
                {
                    selectionArray.map((item) => {
                        return (
                            <MenuItem value={item.value}>{item.label}</MenuItem>
                        )
                    })
                }
            </Select>
           }
        </FormControl>
    )
}

export default SystemSelect
