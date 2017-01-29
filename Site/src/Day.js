import React from 'react';
import {findDOMNode} from 'react-dom';
import $ from 'jquery';

class Day extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            day: props.day,
            color: props.color,
            id: "day"+props.day
        };
        this.divstyle = {
            width: "13%",
            height: "13%",
            border: "solid",
            float: "left",
            backgroundColor: props.color
        }

    };

    render(){
        return(
        <div id={this.state.id} style={this.divstyle}>
            {this.state.day}
        </div>
        );
    };
}
export default Day;

