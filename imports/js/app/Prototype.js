import React, {Component} from 'react';
import {Route, HashRouter} from 'react-router-dom';

import LogoComponent from '../app/Logo';
import LoginComponent from '../verification/LoginView';
import SignUpMainComponent from '../verification/SignUpMain';
import Home from '../homePage/Home';

let isSignedIn = false;

export default class Prototype extends Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <Route path='/' component={LogoComponent} />
                    <Route path='/login' component={LoginComponent} />
                    <Route path='/signup' component={SignUpMainComponent} />
                    <Route path='/home' component={Home} />
                </div>
            </HashRouter>
        );
    }

}

export function setSignedIn(parameters) {
    isSignedIn = parameters.bool;
}