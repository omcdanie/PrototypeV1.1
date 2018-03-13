import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import LogoComponent from '../app/Logo';
import LoginComponent from '../verification/LoginView';
import SignUpMainComponent from '../verification/SignUpMain';
import ConfirmSignUpComponent from '../verification/ConfirmSignUp';
import Home from '../homePage/HomePageView';

let isSignedIn = false;

export default class Prototype extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' component={LogoComponent} />
                    <Route exact path='/login' component={LoginComponent} />
                    <Route exact path='/signup' component={SignUpMainComponent} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/confirm' component={ConfirmSignUpComponent} />
                </div>
            </BrowserRouter>
        );
    }
}

export function setSignedIn(signedIn) {
    isSignedIn = signedIn;
}

export function getSignedIn() {
    return isSignedIn;
}