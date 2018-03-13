import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import LogoComponent from '../app/Logo';
import LoginComponent from '../verification/LoginView';
import SignUpMainComponent from '../verification/SignUpMain';
import Home from '../homePage/HomePageView';
import Profile from '../profiles/ProfilePageView';

let isSignedIn = false;

export default class Prototype extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={BannerComponent} />
                    <Route exact path='/login' component={LoginComponent} />
                    <Route exact path='/signup' component={SignUpMainComponent} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/Profile' component={Profile} />
                </div>
            </BrowserRouter>
        );
    }

}

export function setSignedIn(parameters) {
    isSignedIn = parameters.bool;
}
