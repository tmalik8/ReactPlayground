/**
 * @file Nav Bar Component.
 * @author - Adil Merribi
 */
import React from "react";
import { Navbar, Image, Nav, Form} from "react-bootstrap";
import { AiFillHome, AiFillBell } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { FaUserFriends, FaBook, FaCog } from "react-icons/fa";
import Link from "react-router-dom/Link"
import logo from '../resources/logo.png'
import '../styles/NavBarComponent.css';

const NavBarComponent = ({ img }) => {
    return (
            <Navbar collapseOnSelect className="turnup-nav" expand="lg">
                <Navbar.Brand href="#home"><Image className="logo" alt="TurnUp Activism" src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form className="main-nav col-lg-9 col-sm-8 justify-content-center" inline>
                        <Nav.Link href="#home"><AiFillHome /><span>Home</span></Nav.Link>
                        <Nav.Link href="#events"><BiCalendarEvent /><span>Events</span></Nav.Link>
                        <Nav.Link href="#friends"><FaUserFriends /><span>Connect</span></Nav.Link>
                        <Nav.Link href="#resources"><FaBook /><span>Resources</span></Nav.Link>
                    </Form>

                    <Form className="side-nav  col-lg-3 col-sm-4" inline>
                        <Link href="notifications"><AiFillBell /></Link>
                        <Link href="#settings"><FaCog /></Link>
                        <Link href="#profilePage"><Image className="profile-img" src={img} roundedCircle /></Link>
                        <Link href="#SignOutPage" className="logout">Log Out</Link>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default NavBarComponent;
