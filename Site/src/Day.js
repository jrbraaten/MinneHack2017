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
            width: "13%",
            height: "16%",
            border: "solid",
            float: "left",
            backgroundColor: props.color
        }
        this.notificationstyle = {
            width: "100%",
            borderRadius: "20px",
            textAlign: "center",
            backgroundColor: props.notificationColor,
            color: "lightgrey"
        }

        this.datestyle = {
            width: "100%",
            height:"50%"
        }
        this.dateDay = {
                width: "100%",
                height:"30%"
            }

    };

    render(){
        return(
            <div id={this.state.id} style={this.divstyle}>
                <div style={this.dateDay}>
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

