import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Navbar from 'react-bootstrap/lib/Navbar'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'

const navbarInstance = (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Rememberence</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">Link</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">Link Right</NavItem>
                <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Counter),
        document.getElementById('mount'),
    );

    ReactDOM.render(navbarInstance, document.getElementById('nav-holder'));
});