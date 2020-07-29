/**
 * @author Shayan A.
 */
import React, {useState} from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import "../styles/LUX.css";
import {Link} from "react-router-dom";
import LoginModal from "./LoginModal";

const Navigation = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to='/'>TurnUp Activism</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to='/'>Home</Link>
          <Link className="nav-link" to='/events'>Events</Link>
          <Link className="nav-link" to='/conversations'>Conversations</Link>
          <NavDropdown title="Interns" id="basic-nav-dropdown">
            <Link className="dropdown-item" to='/interns/shayan'>Shayan</Link>
          </NavDropdown>
        </Nav>
        <Button variant="outline-success" onClick={() => setModalVisibility(true)}>Login</Button>
      </Navbar.Collapse>
      <LoginModal handleClose={() => setModalVisibility(false)} show={modalVisibility}/>
    </Navbar>
  );
};

export default Navigation;