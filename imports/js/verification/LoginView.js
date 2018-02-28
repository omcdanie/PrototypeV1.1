import React from 'react';
import {Component} from 'react';

import style from '../../css/verification/LoginSheet.css';
import { setSignedIn } from '../app/Prototype';
import Profile from '../profiles/ProfilePageView';
import {render} from "react-dom";

let userId;
let password;

export default class LoginComponent extends Component {
    render () {
        return (
            <form>
                <div className={style.login}>
                    <input id="userId" type="text" placeholder="username" /><br/>
                    <input id="password" type="password" placeholder="password" /><br/>
                    <input type="submit" value="Login" onClick={this.login} /><br/>
                    <a href="http://www.depaul.edu">Sign Up?</a>
                </div>
            </form>
        );
    }

     login() {
        userId = document.getElementById("userId").value;
        password = document.getElementById("password").value;
        if (userId === "admin" && password === "123") {
            setSignedIn({bool: true});
            return (this.renderProfile());
        } else {
            return(alert("The username and password you entered did not match what is on file"));
        }
    }

    static renderProfile() {
        render(<Profile/>, document.getElementById('active-profile'));
    }
}