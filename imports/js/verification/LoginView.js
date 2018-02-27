import React from 'react';

import style from '../../css/verification/LoginSheet.css';
import { setSignedIn } from '../app/Prototype';

var userId;
var password;

export default class LoginComponent extends React.Component {
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
            setSignedIn(true);
        } else {
            alert("The username and password you entered did not match what is on file");
        }
    }
}