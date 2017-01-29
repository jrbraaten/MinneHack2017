import React from 'react';

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            month: 0
        };
    }

    render(){
        return(
        <div>
            {this.state.month}
        </div>
        );
    }
}
export default Calendar;
