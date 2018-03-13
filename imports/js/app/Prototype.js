import React, {Component} from 'react';
import {Route, HashRouter} from 'react-router-dom';

import LoginComponent from '../verification/LoginView';
import BannerComponent from './Banner';
import Home from '../homePage/HomePageView';
import Profile from '../profiles/ProfilePageView';

let isSignedIn = false;

export default class Prototype extends Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <Route path='/' component={BannerComponent} />
                    <Route path='/login' component={LoginComponent} />
                    <Route path='/home' component={Home} />
                    <Route path='/Profile' component={Profile} />
                </div>
            </HashRouter>
        );
    }

}

export function setSignedIn(parameters) {
    isSignedIn = parameters.bool;
}