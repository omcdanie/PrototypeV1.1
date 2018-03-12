import React, {Component} from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom';

import LogoComponent from '../app/Logo';
import LoginComponent from '../verification/LoginView';
import SignUpMainComponent from '../verification/SignUpMain';
import Home from '../homePage/HomePageView';

let isSignedIn = false;

export default class Prototype extends Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <Route path='/' component={LogoComponent} />
                    <Route exact path='/login' component={LoginComponent} />
                    <Route exact path='/signup' component={SignUpMainComponent} />
                    <Route exact path='/home' component={Home} />
                </div>
            </HashRouter>
        );
    }

}

export function setSignedIn(parameters) {
    isSignedIn = parameters.bool;
}