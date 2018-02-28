import React from 'react';
import {Component} from 'react';

import activeUser from '/imports/js/verification/LoginView';
import activeBucket from '/imports/js/buckets/BucketView';
import reserveBucket from '/imports/js/buckets/BucketView';
import Bucket from 'imports/js/buckets/BucketView';

import bucketStyle from 'imports/css/bucket/bucketSheet.css';

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
                <Bucket>
                    <h2>Active</h2>
                    activeBucket;
                </Bucket>
                <Bucket>
                    <h2>Reserve</h2>
                    reserveBucket;
                </Bucket>
            </div>
        );
    }
}

export default Profile;