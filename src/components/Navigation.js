/**
 * @author Shayan A.
 */
import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "react-router-dom/Link";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to='/'>TurnUp Activism</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to='/'>Playground</Link>
          <Link className="nav-link" to='/events'>Events</Link>
          <Link className="nav-link" to='/conversations'>Conversations</Link>
          <NavDropdown title="Interns" id="basic-nav-dropdown">
            <Link className="dropdown-item" to='/interns/reacttask2'>React Task 2</Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;