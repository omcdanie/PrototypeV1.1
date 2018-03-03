import React, {Component} from "react";

export default class BannerComponent extends Component {
    render() {
        return (
            <div>
                <button type='button' onClick={() => this.props.history.push('/login')}>Bucketful</button>
            </div>
        );
    }
}