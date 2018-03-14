import React, {Component} from 'react';

import Bucket from "../buckets/BucketView";
import "../../css/bucket/bucketSheet.css";
import LayoutComponent from "../app/Layout";

export default class Profile extends Component {

    render() {
        return(
            <LayoutComponent>
                <Bucket/>
            </LayoutComponent>
        );
    }
}