import React from 'react';
//import {render} from 'react-dom';
import {Component} from 'react';
import classNames from 'classnames/bind';

import bucket from "/imports/css/bucket/bucketSheet.css";
import EventList from "./userLists/ListView";

//let bucketDesign = classNames.bind(bucket);

let activeBucket = null;
let reserveBucket;

export default class Bucket extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className={bucket["bucket-box"]}>
                <h3>Active Bucket</h3>
                <EventList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add Goal#{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }


    // buckets = function createBucket() {
    //     const bucketBuilder = (
    //         <script> document.createElement("bucket") </script>
    //     );
    //     render(bucketBuilder, document.getElementById('root'));
    // };
    //
    // bucketDesign = function bucketDesigner() {
    //     let bucketClass = bucketDesign({});
    //     return <button className={bucketClass}>Active Profile</button>;
    // };
    //
    // activeBucket = function loadActiveBucket() {
    //     const bucketElement = (
    //
    //         <div id={'root'}>
    //             buckets;
    //             <h3>Active Bucket</h3>
    //             bucketDesign;
    //         </div>
    //     );
    //     render(bucketElement, document.getElementById('root'));
    // };

}