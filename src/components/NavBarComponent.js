/**
 * @file Nav Bar Component.
 * @author - Adil Merribi
 */
import React from "react";
import { Navbar, Image, Nav } from "react-bootstrap";
import { AiFillHome, AiFillBell } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { FaUserFriends, FaBook, FaCog } from "react-icons/fa";
import { IconContext } from "react-icons";

import logo from '../resources/logo.png'
import '../styles/NavBarComponent.css';

const NavBarComponent = ({ img }) => {
    return (
        <Navbar collapseOnSelect className="turnup-nav" expand="lg">
            <Navbar.Brand href="#home"><Image className="logo" alt="TurnUp Activism" src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav align-items-center links ">
                    
                    <IconContext.Provider value={{ size: 40, color: "white" }}>
                    <Nav.Link href="#home"><AiFillHome /></Nav.Link>
                    <Nav.Link href="#events"><BiCalendarEvent /></Nav.Link>
                    <Nav.Link href="#friends"><FaUserFriends /></Nav.Link>
                    <Nav.Link href="#resources"><FaBook /></Nav.Link>
                </IconContext.Provider>
                    
                
                
                <IconContext.Provider  value={{color: "white" }}>
                    <Nav.Link href="#notifications"><AiFillBell /></Nav.Link>
                    <Nav.Link href="#settings"><FaCog /></Nav.Link>
                    <Nav.Link href="#profilePage"><Image className="profile-img" src={img} roundedCircle /></Nav.Link>
                    <Nav.Link href="#SignOutPage"><div className="Logout-link">Log Out</div></Nav.Link>
                </IconContext.Provider>
                
                </Nav>
              
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBarComponent;
