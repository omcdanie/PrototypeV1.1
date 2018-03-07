import React, {Component} from "react";

import "../../css/app/BannerSheet.css";

export default class BannerComponent extends Component {
    render() {
        return (
            <div className='banner'>
                <a href='#/login'>Bucketful</a>
            </div>
        );
    }
}