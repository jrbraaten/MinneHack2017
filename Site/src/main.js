import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Navbar from 'react-bootstrap/lib/Navbar';
import Calendar from './Calendar';

const navbarInstance = (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Rememberence</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
    </Navbar>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Counter),
        document.getElementById('mount')
    );

    ReactDOM.render(navbarInstance, document.getElementById('nav-holder'));
    ReactDOM.render(React.createElement(Calendar), document.getElementById('calendarLocations'))
});