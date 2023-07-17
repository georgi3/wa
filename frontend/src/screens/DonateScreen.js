import React from "react";
import {Container, Col} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCircleHalfStroke, faCircle, faCheckCircle, faArrowCircleRight, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import vid1 from "../assets/donate/donate.mov";
import vid3 from "../assets/images/about/gallery/videos/3.mp4";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DonateScreen(){
    return (
        <>
            <MyNavbar />
            <Container className={"mx-0 px-0"} fluid>
                <Container>
                    <h2 className={"text-center  p-4 fs-1"}>Who We Help</h2>
                    <Container className={"d-flex flex-row justify-content-center align-content-center"}>
                        <Col lg={4} md={4} sm={6}
                            className={"m-3"}>
                            <Container className={"p-3"}>
                                <h3 className={"text-center waves-bg-secondary py-2 rounded-3 text-light border"}>01</h3>
                                <p className={" text-center lead"}>Deliver nutritious home made meals, hygiene essentials, and clothing to the less fortunate</p>
                            </Container>
                        </Col>
                        <Col lg={4} md={4} sm={6}
                            className={"m-3"}>
                            <Container className={"p-3"}>
                                <h3 className={"text-center waves-bg-secondary py-2 rounded-3 text-light border"}>02</h3>
                                <p className={" text-center lead"}>We offer a volunteering experience that's enjoyable and inclusive for everyone.  </p>
                            </Container>
                        </Col>
                        <Col lg={4} md={4} sm={6}
                            className={"m-3"}>
                            <Container className={"p-3"}>
                                <h3 className={"text-center waves-bg-secondary py-2 rounded-3 text-light border"}>03</h3>
                                <p className={" text-center lead"}>Provide students with an opportunity to gain valuable experience volunteering.</p>
                            </Container>
                        </Col>
                    </Container>
                </Container>
                <Container className={"d-flex justify-content-center m-5 p-5"}>
                    <h1 className={"text center p-5 text-bg-danger"}>Donation box</h1>
                </Container>
                <Container className={"waves-bg-secondary pb-0 mb-0"} fluid>
                    <Container className={"py-3 m-0 d-flex justify-content-center"} fluid>
                        <h2 className={"fw-light text-light"}>
                            The value of money isn't what it can buy, but how many it can help
                        </h2>
                    </Container>
                </Container>
                <Container>
                    <h1 className={"text-center py-4 "}>
                        It's The Season Of Giving
                    </h1>
                </Container>
                <Container className={"d-flex flex-row justify-content-center align-content-center"}>
                    <Col sm={6} className={"p-4 d-flex align-items-center"}>
                        <p className={"lead fs-4 "}
                           style={{"textAlign": "justify"}}>
                            Thousands of people in the greater Montreal area don’t know where their next meal will come from. Rising unemployment levels caused by COVID-19 have forced many more to choose between rent and groceries.
                            <br/><br/>
                            You can help make sure Canadians don’t go to bed hungry tonight. Donate today to feed hungry families, deliver nutritious food to those in need, and support local students!
                        </p>
                    </Col>
                    <Col sm={6} className={"p-4"}>
                        <video controls preload loop className={"img-fluid"}>
                            <source src={vid1} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                </Container>
            </Container>
           <Footer />
        </>
    )
}