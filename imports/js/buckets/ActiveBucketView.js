import React, {Component} from "react";

import CheckBox from 'imports/js/utils/CheckBox.js';
import isChecked from '/../../imports/utils/CheckBox';

import ActiveLists from 'imports/db/client/collections/activeBucketCollections/ActiveList';
import ReserveLists from 'imports/db/client/collections/reserveBucketCollections/ReserveList';
//import EventList from "./userLists/ListView";




const checkBoxLabel = "Move to reserve?";
//let isShowActiveButtonClicked = false;

export default class ActiveBucket extends Component {

    constructor(bucketId) {
        super(bucketId);
        this.state = {items: [], name: '', location: '', description: ''};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static props = {
        bucketId: ''
    };



    render() {
        return (
            <div className="bucket-box-left">
                <h2 className="bucket-title-font">Active Bucket</h2>

                <form onSubmit={this.handleSubmit}>

                    <input
                        className="bucket-input"
                        placeholder="Please enter a Goal Name"
                        onChange={this.handleNameChange}
                        value={ActiveBucket.verifyInput(this.state.name)}
                    />

                    <input
                        className="bucket-input"
                        placeholder="Please give a Location"
                        onChange={this.handleLocationChange}
                        value={ActiveBucket.verifyInput(this.state.location)}
                    />

                    <input
                        className="bucket-input"
                        placeholder="Please give a description"
                        onChange={this.handleDescriptionChange}
                        value={ActiveBucket.verifyInput(this.state.description)}
                    />

                    <CheckBox
                        label={checkBoxLabel}
                    />

                    <button
                        className="bucket-button"
                    >
                        <h3 className="bucket-button-font">
                            Add Active Goal?
                        </h3>
                    </button>

                </form>

            </div>
        );
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    handleLocationChange(e) {
        this.setState({location: e.target.value});
    }
    handleDescriptionChange(e) {
        this.setState({description: e.target.value});
    }

    // static handleShowActiveGoal() {
    //     console.log("In Active Goal handler!");
    //     return (<EventList/>);
    // }


    handleSubmit(e) {
        e.preventDefault();
        // if (isShowActiveButtonClicked) {
        //     ActiveBucket.handleShowActiveGoal();
        //     return;
        // }
        if (!this.state.name) {
            return(alert("You must name your Goal!"));

        } else if (!this.state.location) {
            return(alert("You must give a location for your goal!"));

        } else if (!this.state.description) {
            return(alert("Please define your goal with a description!"));
        }
        const newItems = {
            name: this.state.name,
            location: this.state.location,
            description: this.state.description,
        };

        // the id should be the userId + some other mechanism
        // set the id for reserve/active bucket search
        this.props.bucketId = this.state.name;

        // set form values back to placeholder text
        this.setState(prevState => ({
            items: prevState.items.concat(newItems),
            name: '',
            location: '',
            description: '',
        }));

        if(isChecked) {
            ReserveLists.insert({
                name: newItems.name,
                location: newItems.location,
                description: newItems.description
            });
            //ReserveLists.find().fetch();
        } else {
            ActiveLists.insert({
                name: newItems.name,
                location: newItems.location,
                description: newItems.description
            });
            //ActiveLists.find().fetch();
        }
    }

    static verifyInput(text) {
        if (text > 40) {
            return alert("Input can't exceed 40 characters.");
        } else {
            return text;
        }
    }
}
