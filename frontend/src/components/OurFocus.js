import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {Container, Card, Row, Col} from "react-bootstrap";
import {CountUpOnScroll} from "../components/CountUpOnScroll"

export function  OurFocus() {
    return(
        <Container>
            <Row>
                <Col lg={6}>
                    <h2 className="text-center  py-3">Consistent Local Support</h2>
                    <p className="py-3 px-4 lead " style={{
                        "textAlign": "justify"
                    }}>
                        With the help of our volunteers and donors we were able to organize weekly support
                        in nutritious home made meals, hygiene essentials, and clothing to less fortunate locally.
                        Every Sunday we hold events at @Neighbourhood. We are proud to say that we have established
                        continuous support for 333 weeks straight and we keep going.
                    </p>
                </Col>
                <Col lg={6}>
                    <h2 className="text-center  py-3">Operations Expansion</h2>
                    <p className="py-3 px-4 lead " style={{
                        "textAlign": "justify"
                    }}>
                        Our next goal is to start holding occasional events in other neighbourhoods of Montreal to
                        provide greater support to those in need.
                    </p>
                </Col>
            </Row>
            <Container className="py-3 m-3 px-1 mx-0 d-flex align-content-center justify-content-center flex-wrap">
                <Row sm={12} className="py-3 w-100">
                    <Col md={4} sm={12} className={"py-1 d-flex align-content-center justify-content-center"}>
                        <h3 className=" lead fs-3">
                            Meals Served: <span className="">
                            <CountUpOnScroll end={10000} start={5000} />
                        </span>
                        </h3>
                    </Col>
                    <Col md={4} sm={12} className={"py-1 d-flex align-content-center justify-content-center"}>
                        <h3 className=" lead fs-3">
                            Money Raised: <span className="">
                            <CountUpOnScroll end={100} prefix="$"/>
                        </span>
                        </h3>
                    </Col>
                    <Col md={4} sm={12} className={"py-1 d-flex align-content-center justify-content-center"}>
                        <h3 className=" lead fs-3">
                            Events Organized: <span className="">
                            <CountUpOnScroll end={100} />
                        </span>
                        </h3>
                    </Col>
                </Row>
                <Row sm={12} className="py-3 w-100">
                    <Col md={4} sm={12} className={"py-1 d-flex align-content-center justify-content-center"}>
                        <h3 className=" lead fs-3">
                            Team Members: <span className="">
                            <CountUpOnScroll end={30}/>
                        </span>
                        </h3>
                    </Col>
                    <Col md={4} sm={12} className={"py-1 d-flex align-content-center justify-content-center"}>
                        <h3 className=" lead fs-3">
                            Total Volunteers: <span className="">
                            <CountUpOnScroll end={200} />
                        </span>
                        </h3>
                    </Col>
                    <Col md={4} sm={12} className={"py-1 d-flex align-content-center justify-content-center"}>
                        <h3 className=" lead fs-3">
                            Partnerships Held: <span className="">
                            <CountUpOnScroll end={30} />
                        </span>
                        </h3>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}