import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppButton from '../Buttons/Button'
import { useHistory } from 'react-router-dom';
import { appRouter } from '../../routes/router';

const ApplicationBar = (props) => {
    const { title } = props
    const history = useHistory()
    const navigateSignup = () => {
        history.push(appRouter.Signup.path)
    }
    return (
        <>
            <AppBar style={{backgroundColor: '#28292b'}}>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                <AppButton 
                buttonName={'Sign in'}
                size={'small'}
                color={'inherit'} /> / <AppButton 
                buttonName={'Sign up'}
                testid={'onNavigateSignup'}
                handleClick={() => navigateSignup()}
                size={'small'}
                color={'inherit'} />
                </Toolbar>
            </AppBar>
        </>
    )
}

export default ApplicationBar