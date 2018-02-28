import React from 'react';
import {Component} from 'react';

import style from '/../css/bucket/bucketSheet.css';

export default class EventList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style['list-box']}>
                <ol>
                    {this.props.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ol>
            </div>
        );
    }
}