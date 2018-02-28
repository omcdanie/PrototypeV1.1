import PropTypes from "prop-types";
import React from 'react-dom';
import {Component} from 'react';
import Button from "./Button";
import "../../css/home/ButtonPanel.css";

class ButtonPanel extends Component {

    handleClick = (buttonName) => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className="component-button-panel">
                <div id="box one"><Button name="01" clickHandler={this.handleClick} /></div>
                <div id="box two"><Button name="02" clickHandler={this.handleClick} /></div>
                <div id="box three"><Button name="03" clickHandler={this.handleClick} /></div>
                <div id="box four"><Button name="04" clickHandler={this.handleClick} /></div>
                <div id="box five"><Button name="05" clickHandler={this.handleClick} /></div>
                <div id="box six"><Button name="06" clickHandler={this.handleClick} /></div>
                <div id="box seven"><Button name="07" clickHandler={this.handleClick} /></div>
                <div id="box eight"><Button name="08" clickHandler={this.handleClick} /></div>
                <div id="box nine"><Button name="09" clickHandler={this.handleClick} /></div>
                <div id="box ten"><Button name="10" clickHandler={this.handleClick} /></div>
                <div id="box eleven"><Button name="11" clickHandler={this.handleClick} /></div>
                <div id="box twelve"><Button name="12" clickHandler={this.handleClick} /></div>
                <div id="box thirteen"><Button name="13" clickHandler={this.handleClick} /></div>
                <div id="box fourteen"><Button name="14" clickHandler={this.handleClick} /></div>
                <div id="box fifteen"><Button name="15" clickHandler={this.handleClick} /></div>
                <div id="box sixteen"><Button name="16" clickHandler={this.handleClick} /></div>
            </div>
        );
    }
}

ButtonPanel.propTypes = {
    clickHandler: PropTypes.func,
};

export default ButtonPanel;
