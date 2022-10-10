import React, {cloneElement} from 'react'
import { Grid, Typography } from '@mui/material'

const SystemGrid = (props) => {
    const { rowSpacing, columnSpacing, GridItems, style, spacing, xs = 6, md = 0, lg = 0 } = props
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
                        <Grid item xs={xs} md={md} lg={lg} key={index}>
                            {cloneElement(item.children)}
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default SystemGrid