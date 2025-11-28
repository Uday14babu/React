import PropTypes from "prop-types";
import "./Button.css";
import React from "react";

export default class Button extends React.Component {
    static propTypes ={
        name:PropTypes.string,
        orange:PropTypes.bool,
        wide:PropTypes.bool,
        clickhandler:PropTypes.func,
    };
    handleClick=() =>{
        this.props.clickhandler(this.props.name);
    };
    render() {
        
            const className=[
                "component-button",
                this.props.orange ? "orange":"",
                this.props.wide ? "wide":"",
            ];
        return(
            <div className={className.join(" ").trim()}>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        )
        
    }
}