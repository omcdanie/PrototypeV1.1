import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {getSignedIn} from "../app/Prototype";

export default class ConfirmSignUpComponent extends Component {

    constructor() {
        super();
        console.log("Made it to login confirm");

    }

    render() {

        let signedIn = getSignedIn();

        if (!signedIn) {
            return (
                <Redirect to='login' />
            );
        } else {
            return (
                <div>
                    <h3>Thank you for signing up!</h3><br/><br/>
                    <p>Now you may explore Bucketful items, add to your goals and start ticking items off your bucket
                        list.
                        We are constantly looking to better our application to create a supportive community of active
                        individuals like yourself,
                        so please feel free to share your thoughts with us by using our feedback link. Thanks!</p>
                    <br/><br/>
                    <Link to={{pathname: "/home"}}>Check out my homepage</Link>
                </div>
            );
        }
    }
}