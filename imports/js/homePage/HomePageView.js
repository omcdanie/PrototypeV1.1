import React from "react";
import { Component } from 'react';

import ButtonPanel from "./ButtonPanel";
import "../imports/css/home/HomeSheet.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: null,
			next: null,
			operation: null,
		};
	}

	handleClick = (buttonName) => {
		this.setState(this.state, buttonName);
	};

	render() {
		return (
			<div className="component-app">
				<ButtonPanel clickHandler={this.handleClick} />
			</div>
		);
	}
}

export default Home;
