import React, {Component} from 'react';
// import ActiveLists from 'imports/db/client/collections/activeBucketCollections/ActiveList';
// import ReserveLists from 'imports/db/client/collections/reserveBucketCollections/ReserveList';

// let reserveListArray;
// let activeListArray;

export default class EventList extends Component {
    constructor(props) {
        super(props);
    }

    // reserveListArray = ReserveLists.find({name: Meteor.name()}).fetch();
    // activeListArray = ActiveLists.find();

    render() {
        return (
            <div className="bucket-box-right">
                <ul className="number-box">
                    {this.props.items.map(item => (
                        <li className="list-box" key={item.id}> Goal Name: {item.name}</li>
                    ))}
                    {this.props.items.map(item => (
                        <li className="list-box" key={item.id}> Goal Location: {item.location}</li>
                    ))}
                    {this.props.items.map(item => (
                        <li className="list-box" key={item.id}> Goal Description: {item.description}</li>
                    ))}
                 </ul>
            </div>
        );
    }
}