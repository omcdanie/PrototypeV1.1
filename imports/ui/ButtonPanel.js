import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import "../../public/styles/ButtonPanel.css";

class ButtonPanel extends React.Component {

    handleClick = (buttonName) => {
        this.props.clickHandler(buttonName);
    }

    render() {
        return (
            <div className="component-button-panel">
                <div class="box one"><Button name="01" clickHandler={this.handleClick} /></div>
                <div class="box two"><Button name="02" clickHandler={this.handleClick} /></div>
                <div class="box three"><Button name="03" clickHandler={this.handleClick} /></div>
                <div class="box four"><Button name="04" clickHandler={this.handleClick} /></div>
                <div class="box five"><Button name="05" clickHandler={this.handleClick} /></div>
                <div class="box six"><Button name="06" clickHandler={this.handleClick} /></div>
                <div class="box seven"><Button name="07" clickHandler={this.handleClick} /></div>
                <div class="box eight"><Button name="08" clickHandler={this.handleClick} /></div>
                <div class="box nine"><Button name="09" clickHandler={this.handleClick} /></div>
                <div class="box ten"><Button name="10" clickHandler={this.handleClick} /></div>
                <div class="box eleven"><Button name="11" clickHandler={this.handleClick} /></div>
                <div class="box twelve"><Button name="12" clickHandler={this.handleClick} /></div>
                <div class="box thirteen"><Button name="13" clickHandler={this.handleClick} /></div>
                <div class="box fourteen"><Button name="14" clickHandler={this.handleClick} /></div>
                <div class="box fifteen"><Button name="15" clickHandler={this.handleClick} /></div>
                <div class="box sixteen"><Button name="16" clickHandler={this.handleClick} /></div>
            </div>
        );
    }
}

ButtonPanel.propTypes = {
    clickHandler: PropTypes.func,
};

export default ButtonPanel;
