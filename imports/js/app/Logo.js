import React, {Component} from "react";

import "../../css/app/LogoSheet.css";

export default class LogoComponent extends Component {
    render() {
        return (
            <div className='logo'>
                <a href='#/login'>Bucketful</a>
            </div>
        );
    }
}