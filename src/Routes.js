import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/About">
                <About/>
            </Route>
            <Route exact path="/Signin">
                <SignIn/>
            </Route>
            <Route exact path="/Signup">
                <SignUp/>
            </Route>
            <Route exact path="/ad/:id">
                <AdPage/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    );
}