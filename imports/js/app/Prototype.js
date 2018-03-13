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
                    <Route path='/' component={BannerComponent} />
                    <Route path='/login' component={LoginComponent} />
                    <Route path='/home' component={Home} />
                    <Route path='/Profile' component={Profile} />
                </div>
            </BrowserRouter>
        );
    }

}

export function setSignedIn(parameters) {
    isSignedIn = parameters.bool;
}