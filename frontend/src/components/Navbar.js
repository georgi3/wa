import React from 'react';
import {useReducer, useState, createContext} from "react";
import {Navbar, Nav, Container, Row, Col, NavbarBrand} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import logo from '../assets/images/logo.webp';
import {faCalendarDays, faUsersRectangle, faHandHoldingDollar, faHouseChimney, faUserAlt, faRightToBracket, faSignature, faBookOpen} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyNavbar() {
    return (
        <Navbar collapseOnSelect bg="primary" variant="dark" sticky="top" expand="md" className="w-100 py-3">
            <Container className="px-0 mx-3" fluid>
                <LinkContainer to={"/"}>
                    <Navbar.Brand>
                        WelfareAvenue
                        {/*<img src={logo} alt="Logo" width="70" height="80"/>*/}
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Collapse id="responsive-nav-bar" >
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link className="nav-link" to={"/"}><FontAwesomeIcon icon={faHouseChimney}/> Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/events">
                            <Nav.Link className="nav-link"><FontAwesomeIcon icon={faCalendarDays}/> Events</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link className="nav-link"><FontAwesomeIcon icon={faUsersRectangle}/> About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/press">
                            <Nav.Link className="nav-link "><FontAwesomeIcon icon={faBookOpen} /> Press</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/donate">
                            <Nav.Link className="nav-link text-bg-secondary rounded-5" ><FontAwesomeIcon icon={faHandHoldingDollar} /> Donate</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Nav >
                    {/*<Nav.Link href="#user" className="nav-link">userName <FontAwesomeIcon icon={faUserAlt}/></Nav.Link>*/}
                    <LinkContainer to={"signup"}>
                        <Nav.Link>Sign Up <FontAwesomeIcon icon={faRightToBracket}/></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"signin"}>
                        <Nav.Link>Sign In <FontAwesomeIcon icon={faSignature}/></Nav.Link>
                    </LinkContainer>
                    {/*<Navbar.Toggle aria-controls="responsive-nav-bar" className="end-100"/>*/}
                </Nav>
            </Container>
        </Navbar>
        );
    }
