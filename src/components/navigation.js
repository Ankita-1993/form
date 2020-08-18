import React, { Component } from 'react';
// import './Navigation.css'
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
// import { withRouter } from 'react-router-dom';


class Navigation extends Component {
    render() { 
        return (
            <Navbar>
                <Navbar.Brand href="#header">Please enter your details</Navbar.Brand>
            </Navbar>
        );
    }
}
 
export default Navigation;