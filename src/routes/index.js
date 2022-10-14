import React from 'react'
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import { Home, Signup , ForgetPassword, TermsAndConditions, PrivacyPolicy,  
Shop, HomeDashboard, BOHomeDashboard, AdminRegistration, Login, KnowMore, ProductMgmt , AddProductMgmt} from '../views'
import { appRouter, appAdminRouter, appBORouter } from './router'
import { Global } from '../core/context/GlobalContext'
import { ProjectDetailsContext } from '../core/context/ProjectDetailsContext';
import {StudentProjectContext} from '../core/context/StudentProjectContext';
import { AdministratorContext } from '../core/context/AdminContext';
import { Student } from '../core/context/StudentContext';
import { Provider } from 'react-redux'
import { RouteWithAdminSidebar, RouteWithBusinessOwnerSidebar } from './base/route_sd'
import { localstoragehelper } from '../core/utils/storage'


import configureStore from '../core/redux/reducers/store';
const key = localstoragehelper.load('key_identifier')
const store = configureStore()

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

const ProtectedRoute = ({component : Component, ...rest}) => {
    
    return ( 
        <>
            <Route
                {...rest}
                render={props => {
                    if(!localStorage.getItem('key_identifier')){
                        return <Redirect to={appRouter.SignIn.path} />
                    }
                    return <Component {...props} />
                }} />
        </>
    )
}


export default () => (
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
                                    <RouteWithLoad exact path={appRouter.SignIn.path} component={Login} />
                                    <RouteWithLoad exact path={appRouter.KnowUs.path} component={KnowMore}/>
                                    <RouteWithLoad 
                                        exact 
                                        path={appRouter.AdminRegistration.path} 
                                        component={AdminRegistration} />
                                    <ProtectedRoute exact path={appAdminRouter.Home.path} component={HomeDashboard} /> 
                                    <ProtectedRoute exact path={appAdminRouter.ProductMgmt.path} component={ProductMgmt}/>
                                    <ProtectedRoute exact path={appAdminRouter.AddProductMgmt.path} component={AddProductMgmt}/>

                                    <RouteWithBusinessOwnerSidebar exact path={appBORouter.Home.path} component={BOHomeDashboard}/>
                            </AdministratorContext>
                        </StudentProjectContext>
                        </ProjectDetailsContext>
                        </Student>
                    </Global>
            </Provider>
        </Switch>
    </BrowserRouter>
)