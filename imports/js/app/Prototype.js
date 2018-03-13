import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import LoginComponent from '../verification/LoginView';
import SignUpMainComponent from '../verification/SignUpMain';
import Home from '../homePage/Home';
import ConfirmSignUpComponent from '../verification/ConfirmSignUp';
import Profile from '../profiles/ProfilePageView';
import LayoutComponent from "./Layout";

export default class Prototype extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={LayoutComponent} />
                    <Route path='/login' component={LoginComponent} />
                    <Route path='/signup' component={SignUpMainComponent} />
                    <Route path='/home' component={Home} />
                    <Route path='/confirm' component={ConfirmSignUpComponent} />
                    <Route path='/profile' component={Profile} />
                </Switch>
            </BrowserRouter>
        );
    }
}
