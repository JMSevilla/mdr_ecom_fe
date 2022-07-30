import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../views/Home'
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
    </Switch>
)