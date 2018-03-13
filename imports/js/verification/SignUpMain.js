import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import '../../css/verification/SignUpSheet.css';

import ConfirmSignUpComponent from '../verification/ConfirmSignUp';
import {setSignedIn} from "../app/Prototype";

export default class SignUpMainComponent extends Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <form onSubmit={this.submitSignUp.bind(this)}>
                    <div className="signUp">
                        <h1 className="signUpHeader">Sign up for free!</h1>
                        <input id="firstName" type="text" placeholder="First" /><br/>
                        <input id="lastName" type="text" placeholder="Last" /><br/>
                        <input id="email" type="email" placeholder="E-mail" /><br/>
                        <input id="userid" type="text" placeholder="Username" /><br/>
                        <input id="password" type="password" placeholder="Password" /><br/>
                        <input id="confirmPassword" type="password" placeholder="Confirm password" />
                        <p> Birth date </p>
                        <input id="birthday" type="date" placeholder="MM/DD/YYYY"/><br/><br/>
                        <label><input id="male" type="radio" value="male" onChange={this.deselectFemale}/>Male</label>
                        <label><input id="female" type="radio" value="female" onChange={this.deselectMale}/>Female</label><br/><br/>
                        <input type="button" value="Cancel" onClick={this.cancelClick}/>
                        <input type="submit" value="Sign Up!"/><br/>
                    </div>
                </form>
            </div>
        );
    }

    confirmPasswordMatch = () => {
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirmPassword");

        if (password.value === "") {
            alert("Password field is required.");
            password.focus();
            password.select();
            return;
        }

        if (confirmPassword.value === "") {
            alert("Please confirm your password.");
            confirmPassword.focus();
            confirmPassword.select();
            return;
        }

        if (password.value !== confirmPassword.value) {
            alert("Password and confirm password do not match.");
            return false;
        }

        return true;
    };

    submitSignUp = () => {
        let first = document.getElementById("firstName");
        let last = document.getElementById("lastName");
        let email = document.getElementById("email");
        let userid = document.getElementById("userid");
        let password = document.getElementById("password");
        let birthday = document.getElementById("birthday");

        if (first.value === "") {
            alert("First name field is required.");
            first.focus();
            first.select();
            return;
        }
        if (last.value === "") {
            alert("Last name field is required.");
            last.focus();
            last.select();
            return;
        }
        if (email.value === "") {
            alert("Email field is required.");
            email.focus();
            email.select();
            return;
        }
        if (userid.value === "") {
            alert("Username field is required.");
            userid.focus();
            userid.select();
            return;
        }
        if (this.confirmPasswordMatch() !== true) {
            password.focus();
            password.select();
            return;
        }
        if (birthday.value === "") {
            alert("Birth date field is required.");
            birthday.focus();
            birthday.select();
            return;
        }

        let gender = this.getGenderSelect();

        if (gender === false) {
            return;
        }

        setSignedIn(true);

        this.props.history.push("/confirm");

    };

    getGenderSelect = () => {
        let male = document.getElementById("male");
        let female = document.getElementById("female");

        if (male.checked) {
            return male.value;
        } else if (female.checked) {
            return female.value;
        } else {
            alert("Please select male or female.");
            return false;
        }
    };

    cancelClick = () => {
        this.props.history.push('/login')
    };

    deselectFemale = () => {
        document.getElementById("female").checked = false;
    };

    deselectMale = () => {
        document.getElementById("male").checked = false;
    };

}