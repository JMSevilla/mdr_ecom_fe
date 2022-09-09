import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../views/Home'
import Signup from '../views/signup/Signup'
import ForgetPassword from '../views/ForgetPassword/ForgetPassword'
import TermsAndConditions from '../views/BusinessPolicy/TermsAndConditions/TermsAndConditions'
import PrivacyPolicy from '../views/BusinessPolicy/PrivacyPolicy/PrivacyPolicy'
import Shop from '../views/Shop/Shop'
import AdminRegistration from '../views/Administrator/Registration/Registration'
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
        <RouteWithLoad exact path={appRouter.TermsAndConditions.path} component={TermsAndConditions}/>
        <RouteWithLoad exact path={appRouter.PrivacyPolicy.path} component={PrivacyPolicy} />
        <RouteWithLoad exact path={appRouter.Shop.path} component={Shop} />

        {/* admin registration */}
        <RouteWithLoad exact path={appRouter.AdminRegistration.path} component={AdminRegistration} />
    </Switch>
)