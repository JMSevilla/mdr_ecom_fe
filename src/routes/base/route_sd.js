import React from 'react';
import {Route} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import 'react-pro-sidebar/dist/css/styles.css';

const RouteWithAdminSidebar = (
    {component: Component, ...rest}
) => {
    const history = useHistory();
    return (
        <Route {...rest} render={props => (
          <Component {...props} />)}
        />
    )
}

const RouteWithBusinessOwnerSidebar = () => {

}

const RouteWithStudentSidebar = () => {
    
}

export {RouteWithAdminSidebar}