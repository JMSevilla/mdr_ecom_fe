import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from '../views/Home'
import Signup from '../views/signup/Signup'
import ForgetPassword from '../views/ForgetPassword/ForgetPassword'
import TermsAndConditions from '../views/BusinessPolicy/TermsAndConditions/TermsAndConditions'
import PrivacyPolicy from '../views/BusinessPolicy/PrivacyPolicy/PrivacyPolicy'
import Shop from '../views/Shop/Shop'
import HomeDashboard from '../views/Administrator/Dashboard/Home/Home'
import AdminRegistration from '../views/Administrator/Registration/Registration'
import { appRouter } from './router'
<<<<<<< HEAD
import Login from '../views/Login/Login'
=======
import { Global } from '../core/context/GlobalContext'
import { ProjectDetailsContext } from '../core/context/ProjectDetailsContext';
import {StudentProjectContext} from '../core/context/StudentProjectContext';
import { AdministratorContext } from '../core/context/AdminContext';
import { Student } from '../core/context/StudentContext';
import { Provider } from 'react-redux'
import configureStore from '../core/redux/store';
const store = configureStore()
>>>>>>> 418222d83451e935f17ae8b7cdc84cc7075aff4c

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
<<<<<<< HEAD
    <Switch>
        <RouteWithLoad exact path={appRouter.Homepage.path} component={Home} />
        <RouteWithLoad exact path={appRouter.Signup.path} component={Signup} />
        <RouteWithLoad exact path={appRouter.ForgetPassword.path} component={ForgetPassword} />
        <RouteWithLoad exact path={appRouter.TermsAndConditions.path} component={TermsAndConditions}/>
        <RouteWithLoad exact path={appRouter.PrivacyPolicy.path} component={PrivacyPolicy} />
        <RouteWithLoad exact path={appRouter.Shop.path} component={Shop} />
        <RouteWithLoad exact path={appRouter.Signin.path} component={Login} />
        {/* admin registration */}
        <RouteWithLoad exact path={appRouter.AdminRegistration.path} component={AdminRegistration} />
    </Switch>
=======
    <BrowserRouter>
        <Switch>
            <Provider store={store}>
                    <Global>
                        <Student>
                        <ProjectDetailsContext>
                        <StudentProjectContext>
                            <AdministratorContext>
                                    <RouteWithLoad exact path={appRouter.Homepage.path} component={Home} />
                                    <RouteWithLoad exact path={appRouter.Signup.path} component={Signup} />
                                    <RouteWithLoad exact path={appRouter.ForgetPassword.path} component={ForgetPassword} />
                                    <RouteWithLoad exact path={appRouter.TermsAndConditions.path} component={TermsAndConditions}/>
                                    <RouteWithLoad exact path={appRouter.PrivacyPolicy.path} component={PrivacyPolicy} />
                                    <RouteWithLoad exact path={appRouter.Shop.path} component={Shop} />

                                    {/* admin registration */}
                                    <RouteWithLoad exact path={appRouter.AdminRegistration.path} component={AdminRegistration} />
                            </AdministratorContext>
                        </StudentProjectContext>
                        </ProjectDetailsContext>
                        </Student>
                    </Global>
            </Provider>
        </Switch>
    </BrowserRouter>
>>>>>>> 418222d83451e935f17ae8b7cdc84cc7075aff4c
)