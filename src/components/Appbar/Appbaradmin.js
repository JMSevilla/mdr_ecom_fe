import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const AppbarAdministrator = ({title}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{backgroundColor: '#181818'}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default AppbarAdministrator