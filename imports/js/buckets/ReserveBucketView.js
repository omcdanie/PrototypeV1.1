import React, {Component} from "react";

import EventList from "./userLists/ListView";
//import ActiveLists from 'imports/db/client/collections/activeBucketCollections/ActiveList';
import ReserveLists from 'imports/db/client/collections/reserveBucketCollections/ReserveList';

export default class ReserveBucket extends Component {

    constructor(props) {
        super(props);

        this.handleMakeGoalActive = this.handleMakeGoalActive.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }


    render() {
        return (
            <div className="bucket-box-right">
                <h2 className="bucket-title-font">Reserve Bucket</h2>
                <form>
                    <input
                        className="bucket-input"
                        placeholder="Search Reserve Bucket"
                        list="ReserveBucket"
                    />
                    {/*
                       <datalist/> is incompatible on Safari and Opera
                       will need to implement this polyfill in for
                       compatibility
                       https://github.com/Fyrd/purejs-datalist-polyfill
                     */}
                    <datalist
                        className="reserve-bucket-combo-box"
                        id="something"
                    >
                        <option>
                            {ReserveLists.find({name}).fetch()}
                        </option>
                    </datalist>
                </form>
                <button
                    className="bucket-button"
                    onClick={this.handleDisplayGoal}
                >
                    <h3 className="bucket-button-font">
                        Display Goal?
                        {/*{this.state.items.values()}*/}
                    </h3>
                </button>
                <button
                    className="bucket-button"
                >
                    <h3 className="bucket-button-font">
                        Move Goal To Active?
                        {/*{this.state.items.values()}*/}
                    </h3>
                </button>

            </div>
        );
    }

    static handleDisplayGoal() {
        return (<EventList/>);
    }

    handleMakeGoalActive() {

    }

    handleSelect() {

    }
}