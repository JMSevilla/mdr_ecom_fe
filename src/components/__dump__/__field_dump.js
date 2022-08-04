import React from 'react'
import { Grid, Typography } from '@mui/material'


const SSP_Feature1 = () => {
    return (
        <div>
            <Typography variant="h5" gutterBottom>Scale (SSP) : Feature 1</Typography>
        <Grid style={{
            marginTop: '10px'
        }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <img 
                src='https://cdn2.iconfinder.com/data/icons/business-and-commercial-mixed-hexagone/128/35-256.png'
                style={{width: '50%', height : 'auto'}}
                alt="Login"
                />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6">Login System</Typography>
                <Typography >A login generally requires the user to enter two pieces of information, first a user name and then a password. This information is entered into a login window on a GUI</Typography>
            </Grid>
        </Grid>
        </div>
    )
}

const SSP_Feature2 = () => {
    return (
        <div>
            <Typography variant="h5" gutterBottom>Scale (SSP) : Feature 1</Typography>
        <Grid style={{
            marginTop: '10px'
        }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <img 
                src='https://cdn4.iconfinder.com/data/icons/company-structure-14/62/reception-customer-registration-information-service-256.png'
                style={{width: '50%', height : 'auto'}}
                alt="Login"
                />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6">Customer Registration</Typography>
                <Typography >A customer registration form lets clients sign up for an account or service</Typography>
            </Grid>
        </Grid>
        </div>
    )
}

export { SSP_Feature1, SSP_Feature2 }