import React from 'react';

class Day extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            day: props.day,
            color: props.color
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
        <div style={this.divstyle}>
            {this.state.day}
        </div>
        );
    };
}
export default Day;

