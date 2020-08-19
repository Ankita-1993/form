import React from 'react';
// import './Navigation.css'
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
// import { withRouter } from 'react-router-dom';


function Navigation(props) { 
    console.log(props);
    return (
        <Navbar>
            <Navbar.Brand href="userlist">User List</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"> */}
            {/* <Nav className="mr-auto">
                <Nav.Link href="/form">Form</Nav.Link>
            </Nav> */}
            {/* </Navbar.Collapse> */}
        </Navbar>
    );
}
 
export default Navigation;