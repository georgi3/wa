import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {Container, Card, Row, Col} from "react-bootstrap";
import {CountUpOnScroll} from "../components/CountUpOnScroll"

export function OurFocus() {
    return(
        <Container>
            <Row>
                <Col lg={6}>
                    <h2 className="text-center py-3">Consistent Local Support</h2>
                    <p className="py-3 px-4" style={{
                        "textAlign": "justify"
                    }}>
                        With the help of our volunteers and donors we were able to organize weekly support
                        in nutritious home made meals, hygiene essentials, and clothing to less fortunate locally.
                        Every Sunday we hold events at @Neighbourhood. We are proud to say that we have established
                        continuous support for 333 weeks straight and we keep going.
                    </p>
                </Col>
                <Col lg={6}>
                    <h2 className="text-center py-3">Operations Expansion</h2>
                    <p className="py-3 px-4" style={{
                        "textAlign": "justify"
                    }}>
                        Our next goal is to start holding occasional events in other neighbourhoods of Montreal to
                        provide greater support to those in need.
                    </p>
                </Col>
            </Row>
            <Container className="py-4 m-3">
                <Row className="py-3">
                    <Col>
                        <h3 className="text-primary">
                            Meals Served: <span className="text-secondary">
                            <CountUpOnScroll end={10000} start={5000} />
                        </span>
                        </h3>
                    </Col>
                    <Col>
                        <h3 className="text-primary">
                            Money Raised: <span className="text-secondary">
                            <CountUpOnScroll end={100} prefix="$"/>
                        </span>
                        </h3>
                    </Col>
                    <Col>
                        <h3 className="text-primary">
                            Events Organized: <span className="text-secondary">
                            <CountUpOnScroll end={100} />
                        </span>
                        </h3>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col>
                        <h3 className="text-primary">
                            Team Members: <span className="text-secondary">
                            <CountUpOnScroll end={30}/>
                        </span>
                        </h3>
                    </Col>
                    <Col>
                        <h3 className="text-primary">
                            Total Volunteers: <span className="text-secondary">
                            <CountUpOnScroll end={200} />
                        </span>
                        </h3>
                    </Col>
                    <Col>
                        <h3 className="text-primary">
                            Partnerships Held: <span className="text-secondary">
                            <CountUpOnScroll end={30} />
                        </span>
                        </h3>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}