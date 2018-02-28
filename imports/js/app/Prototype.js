import React from 'react';

import { render } from 'react-dom';

import LoginComponent from '../verification/LoginView';
import LogoComponent from './Logo';
import Home from '../homePage/HomePageView';

let isSignedIn = false;

export default class Prototype extends React.Component {

    // Loads the initial page (Login or Profile)
    static startup() {
        if (isSignedIn === true) {
            return(renderHome());
        } else {
            return(renderLogin());
        }
    }
}

function renderLogin() {
    // Renders the login page
    render(<LoginComponent/>, document.getElementById('login-component'));
    render(<LogoComponent/>, document.getElementById('logo-component'));
}

function renderHome() {
    render(<Home/>, document.getElementById('home-component'));
}

export function setSignedIn(parameters) {
    isSignedIn = parameters.bool;
}