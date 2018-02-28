import React, {Component} from 'react';
import {userId} from '../verification/LoginView';

export let loadedProfile;

export default class ProfilePageView extends Component {
    loadedProfile = function LoadProfile(userId) {
        if (userId !== 'undefined') {
            alert("Loading List");
        }
    };


}


