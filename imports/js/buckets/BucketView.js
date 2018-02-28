import React from 'react';
import {render} from 'react-dom';
import {Component} from 'react';
import classNames from 'classnames/bind';

import bucket from '/imports/css/bucket/bucketSheet.css';
let bucketDesign = classNames.bind(bucket);

let activeBucket = null;
let reserveBucket;
let buckets;

class Bucket extends Component {

    buckets = function createBucket() {
        const bucketBuilder = (
            <script> document.createElement("bucket") </script>
        );
        render(bucketBuilder, document.getElementById('root'));
    };

    bucketDesign = function bucketDesigner(){
        let bucketClass = bucketDesign({

        });
        return <button className={bucketClass}>Active Profile</button>;
    };

    activeBucket = function loadActiveBucket() {
        const bucketElement = (

            <div id={'root'}>
                buckets;
                <h3>Active Bucket</h3>
                bucketDesign;
            </div>
        );
        render(bucketElement, document.getElementById('root'));
    };

    render() {
        return(
            <div>activeBucket</div>
        )
    };
}

export default activeBucket;
//render(<Bucket/>, document.getElementById('root'));