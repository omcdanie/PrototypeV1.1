import React, {Component} from 'react';

import Bucket from "../buckets/BucketView";
import "../../css/bucket/bucketSheet.css";

export default class Profile extends Component {

    render() {
        return(
            <div>
                <Bucket/>
            </div>
        );
    }
}