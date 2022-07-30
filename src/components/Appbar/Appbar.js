import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


const ApplicationBar = (props) => {
    const { title } = props
    return (
        <>
            <AppBar >
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default ApplicationBar