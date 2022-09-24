import React, {cloneElement} from 'react'
import { Grid, Typography } from '@mui/material'

const SystemGrid = (props) => {
    const { rowSpacing, columnSpacing, GridItems, style, spacing } = props
    return (
        <Grid container 
        rowSpacing={rowSpacing}
        columnSpacing={columnSpacing}
        style={style}
        spacing={spacing}
        >
            {
                GridItems.map((item, index) => {
                    return (
                        <Grid item xs={6} key={index}>
                            {cloneElement(item.children)}
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default SystemGrid