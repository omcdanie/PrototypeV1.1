import React, {Component} from 'react';
import Bucket from 'imports/js/buckets/BucketView';

import 'imports/css/bucket/bucketSheet.css';

export default class Profile extends Component {

    render() {
        return(
            <div>
                <Bucket/>
            </div>
        );
    }
}