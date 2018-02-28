import React from 'react';
import {Component} from 'react';
import { render } from 'react-dom';


import LoginComponent from '../verification/LoginView';
import LogoComponent from './Logo';

let isSignedIn = false;

export default class Prototype extends Component {

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
    render(<HomeComponent/>, document.getElementById('home-component'));
}

export function setSignedIn(parameters) {
    isSignedIn = parameters.bool;
    //return (renderHome());
}