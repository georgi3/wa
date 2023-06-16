import React from "react";
import {Container, Row, Col, Form, Button, Accordion} from "react-bootstrap";



export function DonationForm(){
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header >Donate</Accordion.Header>
                <Accordion.Body>
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
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}