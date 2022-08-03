import React from 'react'
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

 const CustomizedSnackbars = (
    {
        open, message, handleClose, severity, autoHideDuration
    }
 ) => {
    return (
        <Snackbar 
        open={open} 
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        anchorOrigin={{
            vertical : 'top',
            horizontal : 'right'
        }}
        >
            <Alert 
            onClose={handleClose} 
            severity={severity}
            sx={{ width : '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

export default CustomizedSnackbars