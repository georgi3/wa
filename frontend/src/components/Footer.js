import React from 'react';
import {useReducer, useState, createContext} from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {faInstagram, faTiktok, faFacebook, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMediaLinks from "./SocialMediaLinks";

const socialMedias = [
    {
        icon: faInstagram,
        href: "",
        color: "text-light"
    },
    {
        icon: faTiktok,
        href: "",
        color: "text-light"
    },
    {
        icon: faFacebook,
        href: "",
        color: "text-light"
    },
    {
        icon: faLinkedin,
        href: "",
        color: "text-light"
    },
    {
        icon: faTwitter,
        href: "",
        color: "text-light"
    },
];
export default function Footer() {
    return (
        <Container className="bg-primary" fluid>
            <Row className="py-3 mx-auto">
                {/*<Button variant="warning" className="w-100 btn-lg mr-auto text-dark">Donate</Button>*/}
            </Row>
            <Row className="py-3">
                <Col sm={12} md={12} lg={6}>
                    <h3 className="text-light my-3 text-center">Contact Information</h3>
                    <ContactInfo />
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <h3 className="text-light my-3 text-center">Get in Touch</h3>
                    <ContactForm/>
                </Col>
            </Row>
            <Container className={"text-light"}>
                <SocialMediaLinks socials={socialMedias}/>
            </Container>
            <Row>
                <Col className={"waves-bg-primary"}>
                    <FooterLine/>
                </Col>
            </Row>
        </Container>
    )
}


function ContactInfo() {
    return (
        <Container className="container-md px-3 py-5" fluid>
            <Row className="p-1 pb-3">
                <Col className={"text-light"}>Telephone:</Col>
                <Col><a href="tel:+1-(514)-344-6556" className="link-light">+1-(514)-344-6556</a></Col>
            </Row>
            <Row className="p-1 pb-3">
                <Col className={"text-light"}>Telephone:</Col>
                <Col><a href="tel:+1-(514)-344-6556" className="link-light">+1-(514)-344-6556</a></Col>
            </Row>
            <Row className="p-1 pb-3">
                <Col className={"text-light"}>Email:</Col>
                <Col><a href="mailto:info@welfareavenue.com" className="link-light">info@welfareavenue.com</a></Col>
            </Row>
            <Row className="p-1 pb-3">
                <Col className={"text-light"}>Address:</Col>
                <Col className={"text-light"}>JSMB Guy Street 12th floor</Col>
            </Row>
        </Container>
    )
}

function ContactForm() {
    return (
        <Container className="container-md px-3 pb-5 pt-2"  fluid>
            <Form id={"getInTouchId"}>
                <Form.Group className="mb-3" controlId="formSendersEmail">
                    <Form.Label className={"text-light"}>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSendersName">
                    <Form.Label className={"text-light"}>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSendersName">
                    <Form.Label className={"text-light"}>Your Message</Form.Label>
                    <Form.Text className="form-control" as="textarea"/>
                </Form.Group>
                <Button className="w-100 btn btn-outline-light mx-auto" type="submit">
                    Send us a message
                </Button>
            </Form>
        </Container>
    )
}

function FooterLine() {
    return (
        <Container  fluid>
            <p className="text-center text-light align-middle my-1 py-2">Copyright &copy; Welfare Avenue {new Date().getFullYear()}</p>
        </Container>
    )
}

