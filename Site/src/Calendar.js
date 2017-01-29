import React from 'react';
import Day from './Day';

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {

        };
        this.divclear = {
            clear: "left"
        };
        this.weekdaystyle = {
            width: "13%",
            height: "5%",
            border: "solid",
            float: "left",
            backgroundColor: "#F6EFE6",
            textAlign: "center"
        };
    };


    render(){
        return(
        <div>
            <div style={this.weekdaystyle}>Sunday</div>
            <div style={this.weekdaystyle}>Monday</div>
            <div style={this.weekdaystyle}>Tuesday</div>
            <div style={this.weekdaystyle}>Wednesday</div>
            <div style={this.weekdaystyle}>Thursday</div>
            <div style={this.weekdaystyle}>Friday</div>
            <div style={this.weekdaystyle}>Saturday</div>
            <div style={this.divclear}></div>
            <Day day="1" color="#F6EFE6"/>
            <Day day="2" color="#F6EFE6"/>
            <Day day="3" color="#F6EFE6"/>
            <Day day="4" color="#F6EFE6"/>
            <Day day="5" color="#F6EFE6"/>
            <Day day="6" color="#F6EFE6"/>
            <Day day="7" color="#F6EFE6"/>
            <div style={this.divclear}></div>
            <Day day="8" color="#F6EFE6"/>
            <Day day="9" color="#F6EFE6"/>
            <Day day="10" color="#F6EFE6"/>
            <Day day="11" color="#F6EFE6"/>
            <Day day="12" color="#F6EFE6"/>
            <Day day="13" color="#F6EFE6"/>
            <Day day="14" color="#F6EFE6"/>
            <div style={this.divclear}></div>
            <Day day="15" color="#F6EFE6"/>
            <Day day="16" color="#F6EFE6"/>
            <Day day="17" color="#F6EFE6"/>
            <Day day="18" color="#F6EFE6"/>
            <Day day="19" color="#F6EFE6"/>
            <Day day="20" color="#F6EFE6"/>
            <Day day="21" color="#F6EFE6"/>
            <div style={this.divclear}></div>
            <Day day="22" color="#F6EFE6"/>
            <Day day="23" color="#F6EFE6"/>
            <Day day="24" color="#F6EFE6"/>
            <Day day="25" color="#F6EFE6"/>
            <Day day="26" color="#F6EFE6"/>
            <Day day="27" color="#F6EFE6"/>
            <Day day="28" color="#F6EFE6"/>
            <div style={this.divclear}></div>
            <Day day="29" color="#F6EFE6"/>
            <Day day="30" color="#F6EFE6"/>
            <Day day="31" color="#F6EFE6"/>

        </div>
        );
    };
}
export default Calendar;
