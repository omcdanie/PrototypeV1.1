import React, {Component} from 'react';
import LogoComponent from "./Logo";

export default class LayoutComponent extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <LogoComponent />
                { this.props.children }
            </div>
        );
    }
}