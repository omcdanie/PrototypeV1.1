import React, {Component} from "react";

import { setSignedIn } from '../app/Prototype';

let userId;
let password;

class LoginComponent extends Component {

    render () {
        return (
            <form>
                <div>
                    <input id="userId" type="text" placeholder="username" /><br/>
                    <input id="password" type="password" placeholder="password" /><br/>
                    <input  type="submit" value="Login" onClick={this.login} /><br/>
                    <div>
                        <button type='button' onClick={() => this.props.history.push('/home')}>Sign Up?</button>
                    </div>

                </div>
            </form>
        );
    }

    login() {
        userId = document.getElementById("userId").value;
        password = document.getElementById("password").value;
        if (userId === "admin" && password === "123") {
            setSignedIn({bool: true});
            return (
                this.props.history.push('/home')
            );
        } else {
            return(alert("The username and password you entered did not match what is on file"));
        }
    }
}

export default LoginComponent;