import React from 'react-dom';
import {Component} from 'react';

export default class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: ''};
    }

    render() {
        return (
            <ol>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ol>
        );
    }
}