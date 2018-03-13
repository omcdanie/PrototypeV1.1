import React, {Component} from "react";
import {Link} from "react-router-dom";

import "../../css/app/LogoSheet.css";

export default class LogoComponent extends Component {
    render() {
        return (
            <div className='logo'>
                <Link to={{pathname: '/login'}}>Bucketful</Link>
            </div>
        );
    }
}