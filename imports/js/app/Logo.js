import React, {Component} from "react";
import {Link} from "react-router-dom";

import "../../css/app/LogoSheet.css";
import {getLogoLink} from "../utils/GlobalFunctions";

let componentList = [];

export default class LogoComponent extends Component {

    render() {
        return (
            <div className='logo'>
                <Link to={{pathname: getLogoLink()}}>Bucketful</Link>
                {componentList}
            </div>
        );
    }
}

export function showLinks() {
    componentList.push(<Link activeClassName="home" to={{pathname: '/home'}}>home</Link>);
    componentList.push(<Link activeClassName="profile" to={{pathname: '/profile'}}>profile</Link>);
}