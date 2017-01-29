import React from 'react';
import {findDOMNode} from 'react-dom';
import $ from 'jquery';

class Day extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            day: props.day,
            color: props.color,
            id: "day"+props.day,
            message: props.message,
        };
        this.divstyle = {
            width: "14%",
            height: "14%",
            border: "solid",
            float: "left",
            backgroundColor: props.color
        }
        this.notificationstyle = {
            width: "100%",
            borderRadius: "20px",
            textAlign: "center",
            backgroundColor: props.notificationColor
        }

        this.datestyle = {
            width: "100%",
            height:"50%"
        }

    };

    render(){
        return(
            <div id={this.state.id} style={this.divstyle}>
                <div style={this.datestyle}>
                    {this.state.day}
                </div>
                <div style={this.notificationstyle}>
                    {this.state.message}
                </div>
            </div>
        );
    };
}
export default Day;

