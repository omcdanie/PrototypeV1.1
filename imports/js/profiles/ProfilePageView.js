import React from 'react-dom';
import {Component} from 'react';

import activeUser from '/imports/js/verification/LoginView';
import activeBucket from '/imports/js/buckets/BucketView';
import reserveBucket from '/imports/js/buckets/BucketView';
import Bucket from 'imports/js/buckets/BucketView';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.activeBucket = {activeBucket};
        this.reserveBucket = {reserveBucket};
        this.activeUser = {activeUser};
    }

    render() {
        return (
            <div className={"bucket-box"}>
                <Bucket>Active</Bucket>
                <Bucket>Reserve</Bucket>
            </div>
        );
    }
}

export default Profile;