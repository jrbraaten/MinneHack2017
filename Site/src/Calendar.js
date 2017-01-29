import React from 'react';
import Day from './Day';


class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {

        };
        this.bgColor = {
            white: "#F6EFE6",
            red: "#CC0000",
            green: "#00FF00",
            blue: "#0040C7"
        };
        this.divclear = {
            clear: "left"
        };
        this.weekdaystyle = {
            width: "14%",
            height: "5%",
            border: "solid",
            float: "left",
            backgroundColor: "#F6EFE6",
            textAlign: "center",
        };
        this.messages = {
            m1: "Medication"
        }



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
            <Day day="1" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="2" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="3" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="4" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="5" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="6" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="7" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <div style={this.divclear}></div>
            <Day day="8" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="9" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="10" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="11" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="12" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="13" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="14" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <div style={this.divclear}></div>
            <Day day="15" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="16" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="17" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="18" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="19" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="20" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <Day day="21" color={this.bgColor.white} notificationColor={this.bgColor.white}/>
            <div style={this.divclear}></div>
            <Day day="22" color={this.bgColor.white}/>
            <Day day="23" color={this.bgColor.green} message={this.messages.m1} notificationColor={this.bgColor.blue}/>
            <Day day="24" color={this.bgColor.green} message={this.messages.m1} notificationColor={this.bgColor.blue}/>
            <Day day="25" color={this.bgColor.green} message={this.messages.m1} notificationColor={this.bgColor.blue}/>
            <Day day="26" color={this.bgColor.green} message={this.messages.m1} notificationColor={this.bgColor.blue}/>
            <Day day="27" color={this.bgColor.green} message={this.messages.m1} notificationColor={this.bgColor.blue}/>
            <Day day="28" color={this.bgColor.green} message={this.messages.m1} notificationColor={this.bgColor.blue}/>
            <div style={this.divclear}></div>
            <Day day="29" color={this.bgColor.white} message={this.messages.m1} notificationColor={this.bgColor.blue}/>
            <Day day="30" color={this.bgColor.white} message={this.messages.m1} notificationColor={this.bgColor.blue}/>
            <Day day="31" color={this.bgColor.white} message={this.messages.m1} notificationColor={this.bgColor.blue}/>

        </div>
        );
    };
}
export default Calendar;
