import React, {cloneElement} from 'react'
import { Grid } from '@mui/material'

const SystemGrid = (props) => {
    const { rowSpacing, columnSpacing, GridItems, style } = props
    return (
        <Grid container 
        rowSpacing={rowSpacing}
        columnSpacing={columnSpacing}
        style={style}
        >
            {
                GridItems.map((item) => {
                    return (
                        <Grid item xs={6}>
                            {cloneElement(item.children)}
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default SystemGrid