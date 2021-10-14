import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Logado } from '../helpers/AuthHandler';

export default ({ children, ...rest}) => {
    let logged = Logado();
    let authorized = (rest.private && !logged) ? false : true;

    return (
        <Route
            {...rest}
            render={()=>
                authorized ? children : <Redirect to="Signin" />
            }
        />
    );
}