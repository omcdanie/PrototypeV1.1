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
                {componentList.map((component) => (
                    <Link activeclassname={component.name} to={{pathname: component.path}}>{component.title}</Link>
                ))}
            </div>
        );
    }
}

export function showLinks() {
    componentList.push({name:"home", path:"/home", title:'home'});
    componentList.push({name:"profile", path:"/profile", title:'profile'});
}