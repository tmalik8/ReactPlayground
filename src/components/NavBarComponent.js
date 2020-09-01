/**
 * @file Nav Bar Component.
 * @author - Adil Merribi
 */
import React from "react";
import { Navbar, Image, Nav} from "react-bootstrap";
import logo from '../resources/turnUpLogo.png'
import '../styles/NavBarComponent.css';

const NavBarComponent = ({ img }) => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#home"><Image alt="TurnUp Activism" src={logo} width="100" height="50" /></Navbar.Brand>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="#home"><i class="fas fa-home fa-lg"></i><div>Home</div></Nav.Link>
                    <Nav.Link href="#events"><i class="fas fa-calendar-week fa-lg"></i><div>Events</div></Nav.Link>
                    <Nav.Link href="#friends"><i class="fas fa-user-friends fa-lg"></i><div>Connect</div></Nav.Link>
                    <Nav.Link href="#resources"><i class="fas fa-book fa-lg"></i><div>Resources</div></Nav.Link>
                    <Nav.Link href="#notifications"><i class="fas fa-bell fa-sm"></i></Nav.Link>
                    <Nav.Link href="#settings"><i class="fas fa-cog fa-sm"></i></Nav.Link>
                    <Nav.Link href="#profilePage"><Image width="50" height="50" src={img} style={{ border: "1px solid" }} roundedCircle /></Nav.Link>
                    <Nav.Link href="#SignOutPage">Log Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBarComponent;