import React from 'react';

import activeUser from '/imports/js/verification/LoginView';
import Bucket from 'imports/js/buckets/BucketView';

import bucketStyle from 'imports/css/bucket/bucketSheet.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.activeUser = {activeUser};
    }

    render() {
        return (
            <div className={bucketStyle["bucket-box"]}>
                <Bucket>
                    <h2>Active</h2>

                </Bucket>
                <Bucket>
                    <h2>Reserve</h2>

                </Bucket>
            </div>
        );
    }
}

export default Profile;