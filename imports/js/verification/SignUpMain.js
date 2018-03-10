import React, {Component} from 'react';
import {Route, HashRouter} from 'react-router-dom';

import '../../css/verification/SignUpSheet.css';

export default class SignUpMainComponent extends Component {

    render() {
        return (
          <div>
            <SignUpInputFields/>
          </div>
        );
    }
}

class SignUpInputFields extends Component {

    constructor() {
        super();
        this.state = {
            fireRedirect: false
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitSignUp}>
                    <div className="signUp">
                        <h1 className="signUpHeader">Sign up for free!</h1>
                        <input id="firstName" type="text" placeholder="First" /><br/>
                        <input id="lastName" type="text" placeholder="Last" /><br/>
                        <input id="email" type="email" placeholder="E-mail" /><br/>
                        <input id="userid" type="text" placeholder="Username" /><br/>
                        <input id="password" type="password" placeholder="Password" /><br/>
                        <input id="confirmPassword" type="password" placeholder="Confirm password" /><br/>
                        <h6> Birthdate </h6>
                        <input id="birthday" type="date" /><br/>
                        <h6>Male</h6><input id="gender" type="radio" value="male" />
                        <h6>Female</h6><input id="gender" type="radio" value="female" /><br/>
                        <input type="button" value="Cancel"/><input type="submit" value="Sign Up!"/><br/>
                    </div>
                </form>
            </div>
        );
    }

    submitSignUp = () => {

    }
}