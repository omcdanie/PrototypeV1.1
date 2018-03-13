import React, {Component} from "react";
import { Redirect } from 'react-router-dom';

import { setSignedIn } from '../app/Prototype';
import '../../css/verification/LoginSheet.css';

let userId;
let password;

class LoginComponent extends Component {

    constructor() {
        super();
        this.state = {
            fireRedirect: false
        }

    }

    render () {
        return (
            <div>
                <form onSubmit={this.login}>
                    <div className="login">
                        <input id="userId" type="text" placeholder="username" /><br/>
                        <input id="password" type="password" placeholder="password" /><br/>
                        <input type="submit" value="Log in" /><br/>
                        <a href='/signup'>Sign Up</a>
                    </div>
                </form>
                {this.state.fireRedirect && (
                    <Redirect to='#/home'/>
                )}
            </div>
        );
    }

    login = () => {
        userId = document.getElementById("userId").value;
        password = document.getElementById("password").value;
        if (userId === "admin" && password === "123") {
            setSignedIn({bool: true});
            this.setState({ fireRedirect: true });
            return;
        } else {
            return(alert("The username and password you entered did not match what is on file"));
        }
    }
}

export default LoginComponent;