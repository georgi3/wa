import React from 'react';
import {useReducer, useState, createContext} from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {faInstagram, faTiktok, faFacebook, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
    return (
        <Container className="bg-primary text-bg-dark" fluid>
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
            <Container>
                <SocialMediaLinks/>
            </Container>
            <Row className="bg-secondary">
                <Col>
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
                <Col>Telephone:</Col>
                <Col><a href="tel:+1-(514)-344-6556" className="link-light">+1-(514)-344-6556</a></Col>
            </Row>
            <Row className="p-1 pb-3">
                <Col>Telephone:</Col>
                <Col><a href="tel:+1-(514)-344-6556" className="link-light">+1-(514)-344-6556</a></Col>
            </Row>
            <Row className="p-1 pb-3">
                <Col>Email:</Col>
                <Col><a href="mailto:info@welfareavenue.com" className="link-light">info@welfareavenue.com</a></Col>
            </Row>
            <Row className="p-1 pb-3">
                <Col>Address:</Col>
                <Col>JSMB Guy Street 12th floor</Col>
            </Row>
        </Container>
    )
}

function ContactForm() {
    return (
        <Container className="container-md px-3 pb-5 pt-2" fluid>
            <Form>
                <Form.Group className="mb-3" controlId="formSendersEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSendersName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSendersName">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Text className="form-control" as="textarea"/>
                </Form.Group>
                <Button className="w-100 btn btn-secondary text-light mx-auto" type="submit">
                    Send us a message
                </Button>
            </Form>
        </Container>
    )
}

function SocialMediaLinks(){
    return (
        <Container className='text-center pt-3 mb-3 text-light' fluid>

                    <a className="pt-3 mx-2 text-light card-link" target="_blank" href=""><FontAwesomeIcon size="xl" icon={faTwitter}/></a>
                    <a className="pt-3 mx-2 text-light card-link" target="_blank" href=""><FontAwesomeIcon size="xl" icon={faFacebook}/></a>
                    <a className="pt-3 mx-2 text-light card-link" target="_blank" href=""><FontAwesomeIcon size="xl" icon={faInstagram}/></a>
                    <a className="pt-3 mx-2 text-light card-link" target="_blank" href=""><FontAwesomeIcon size="xl" icon={faLinkedin}/></a>
                    <a className="pt-3 mx-2 text-light card-link" target="_blank" href=""><FontAwesomeIcon size="xl" icon={faTiktok}/></a>
        </Container>
    )
}

function FooterLine() {
    return (
        <Container  fluid>
            <p className="text-center align-middle my-1 py-2">Copyright &copy; Welfare Avenue {new Date().getFullYear()}</p>
        </Container>
    )
}

