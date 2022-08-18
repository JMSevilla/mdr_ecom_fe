import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../views/Home'
import Signup from '../views/signup/Signup'
import ForgetPassword from '../views/ForgetPassword/ForgetPassword'
import { appRouter } from './router'

const RouteWithLoad = ({component : Component, ...rest}) => {
    return ( 
        <>
            <Route
            {...rest}
            render={props => (<>
            <Component {...props} />
            </>)}
            />
        </>
    )
}

export default () => (
    <Switch>
        <RouteWithLoad exact path={appRouter.Homepage.path} component={Home} />
        <RouteWithLoad exact path={appRouter.Signup.path} component={Signup} />
        <RouteWithLoad exact path={appRouter.ForgetPassword.path} component={ForgetPassword} />
    </Switch>
)