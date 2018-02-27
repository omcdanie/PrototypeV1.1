import React from 'react';
import { render } from 'react-dom';
import Profile from '../profiles/ProfilePageView';
import {loadedProfile} from "../profiles/ProfilePageView";
import LoginComponent from '../verification/LoginView';
import LogoComponent from './Logo';

var signedIn = false;

export default class Prototype extends React.Component {

    // Loads the initial page (Login or Profile)
    static startup() {
        if (signedIn === true) {
            renderHome()
        } else {
            renderLogin()
        }
    }
}

function renderLogin() {
    // Renders the login page
    render(<LoginComponent/>, document.getElementById('login-component'));
    render(<LogoComponent/>, document.getElementById('logo-component'));
}

function renderHome() {
    // TODO: render home page
    window.open("https://www.depaul.edu/");
    window.close();
}

function renderProfile() {
    // TODO: render profile page
}

export function setSignedIn(bool) {
    signedIn = bool;
    renderHome();
}