import React from 'react';
import {useState} from "react";
import {Navbar, Nav, Container, NavDropdown, Row, Col, NavbarBrand} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import logo from '../assets/images/logo.webp';
import {faCalendarDays, faUsersRectangle, faHandHoldingDollar, faHouseChimney, faUserAlt, faRightToBracket, faSignature, faBookOpen} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export default function MyNavbar() {
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    };
    const handleLink = () => {
        window.scrollTo(0, 0);
    };
    return (
        <Navbar collapseOnSelect bg="primary" variant="dark" sticky="top" expand="md" className="w-100 py-3">
            <Container className="px-0 mx-3" fluid>
                <LinkContainer to={"/"}>
                    <Navbar.Brand onClick={handleLink}>
                        WelfareAvenue
                        {/*<img src={logo} alt="Logo" width="70" height="80"/>*/}
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Collapse id="responsive-nav-bar" >
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link className="nav-link" onClick={handleLink} to={"/"}><FontAwesomeIcon icon={faHouseChimney}/> Home</Nav.Link>
                        </LinkContainer>
                        <NavDropdown onClick={handleLink} title="Get Involved" id="nav-dropdown" renderMenuOnMount={true} className={"my-0"}>
                            <NavDropdown.Item as={Link} to={"/volunteer"} eventKey="4.1">
                                    Volunteer
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2" as={Link} to={"/activity"}>
                                Our Activity
                            </NavDropdown.Item>
                        </NavDropdown>
                        <LinkContainer  onClick={handleLink()} to="/about">
                            <Nav.Link onClick={handleLink} className="nav-link"><FontAwesomeIcon icon={faUsersRectangle}/> About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/press">
                            <Nav.Link onClick={handleLink} className="nav-link "><FontAwesomeIcon icon={faBookOpen} /> Press</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/donate" className={"waves-bg-secondary"}>
                            <Nav.Link onClick={handleLink} className="nav-link waves-bg-secondary rounded-5 text-light" ><FontAwesomeIcon icon={faHandHoldingDollar} className={"text-light"} /> Donate</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Nav >
                    {/*<Nav.Link href="#user" className="nav-link">userName <FontAwesomeIcon icon={faUserAlt}/></Nav.Link>*/}
                    <LinkContainer to={"/signup"}>
                        <Nav.Link onClick={handleLink}>Sign Up <FontAwesomeIcon icon={faRightToBracket}/></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/signin"}>
                        <Nav.Link onClick={handleLink}>Sign In <FontAwesomeIcon icon={faSignature}/></Nav.Link>
                    </LinkContainer>
                    {/*<Navbar.Toggle aria-controls="responsive-nav-bar" className="end-100"/>*/}
                </Nav>
            </Container>
        </Navbar>
        );
    }
