import Button from "./Button";
import PropTypes from "prop-types";
import "./ButtonPanel.css";
import React from "react";


export default class ButtonPanel extends React.Component{
    static propTypes = {
        clickhandler :PropTypes.func,
    };
    handleClick =ButtonName => {
        this.props.clickhandler(ButtonName);
    };
    render(){
        return(
            <div className="component-Button-panel">
                <div>
                    <Button name="AC" clickhandler={this.handleClick}/>
                    <Button name="+/-" clickhandler={this.handleClick}/>
                    <Button name="%" clickhandler={this.handleClick}/>
                    <Button name="/" clickhandler={this.handleClick}/>
                </div>
                <div>
                <Button name="7" clickhandler={this.handleClick}/>
                <Button name="8" clickhandler={this.handleClick}/>
                <Button name="9" clickhandler={this.handleClick}/>
                <Button name="*" clickhandler={this.handleClick}/>
                </div>
                <div>
                <Button name="4" clickhandler={this.handleClick}/>
                <Button name="5" clickhandler={this.handleClick}/>
                <Button name="6" clickhandler={this.handleClick}/>
                <Button name="-" clickhandler={this.handleClick}/>
                </div>
                <div>
                <Button name="1" clickhandler={this.handleClick}/>
                <Button name="2" clickhandler={this.handleClick}/>
                <Button name="3" clickhandler={this.handleClick}/>
                <Button name="+" clickhandler={this.handleClick}/>
                </div>
                <div>
                <Button name="0" clickhandler={this.handleClick}/>
                <Button name="." clickhandler={this.handleClick}/>
                <Button name="=" clickhandler={this.handleClick}/>
                </div>
                
                
            </div>
        )
    }
}