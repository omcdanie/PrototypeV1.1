import React from 'react';

import style from '/imports/css/bucket/bucketSheet.css';

export default class EventList extends React.Component {
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