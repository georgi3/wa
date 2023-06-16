import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import img1 from "../assets/images/press/1.webp"
import img2 from "../assets/images/press/2.jpg"
import vid1 from "../assets/images/press/vid1.mov"


export default function PressScreen(){
    return (
        <Container className={"px-0 mx-0"} fluid>
            <Container className={"bg-primary px-0 m-0"} fluid>
                <h1 className={"text-center text-light p-4 pb-5 m-0"}>Press Coverage</h1>
            </Container>
            <Container className={"px-0"} fluid>
                <Row className={"d-flex flex-row px-0 mx-0"}
                >
                    <Col sm={12} lg={6}
                         className={"d-flex justify-content-center align-content-center p-0"}>
                        <img height={300} className={"img-fluid"}
                            src={img2} alt="James MscDonald"/>
                    </Col>
                    <Col sm={12} lg={6}
                         className={"d-flex justify-content-center align-content-center bg-secondary p-4"}>
                        <p className={"fs-4 text-light p-3"}
                           style={{"textAlign": "justify"}}
                        >
                            <span className={"text-dark"}>Steel James MacDonald</span> is the founder and executive director of
                            Welfare Avenue. The group sets up a tent outside of the Berri-UQAM Metro station
                            <span className={"text-dark"}> weekly</span> to distribute basic necessities to people
                            experiencing homelessness in Montreal. (Chloë Ranaldi/<span className={"text-dark"}>CBC News</span>)
                        </p>
                    </Col>
                </Row>
                <Row className={"d-flex flex-row px-0 mx-0"}>
                    <Col sm={12} lg={6} className={"d-flex flex-column justify-content-center align-content-center bg-secondary p-4"}>
                        <p className={"fs-4 text-light p-3"}
                           style={{"textAlign": "justify"}}>
                            Here is our story from CityNews about how our work is helping make an impact.
                        </p>
                        <p className={"fs-4 text-light p-3"}
                           style={{"textAlign": "justify"}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        </p>
                    </Col>
                    <Col sm={12} lg={6} className={"d-flex justify-content-center align-content-center p-0"}>
                        <iframe className={"w-100"}
                                src="https://www.youtube.com/embed/_K5C8O6HEZE?autoplay=1&mute=1&loop=1"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                        </iframe>
                    </Col>
                </Row>
                <Row className={"d-flex flex-row px-0 mx-0"}>
                    <Col sm={12} lg={6} className={"d-flex justify-content-center align-content-center p-0"}>
                        <video controls preload loop className={"img-fluid"}>
                            <source src={vid1} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                    <Col sm={12} lg={6} className={"d-flex flex-column justify-content-center align-content-center bg-secondary p-4"}>
                        <p className={"fs-4 text-light p-3"}
                           style={{"textAlign": "justify"}}>
                            Take a look at some of our latest coverage on <span className={"text-dark"}>CTV News</span> and help
                            spread the word about our efforts to provide the unhoused with the necesities for the
                            <span className={"text-dark"}> winter season.</span>
                        </p>
                        <a href={"https://www.cbc.ca/news/canada/montreal/montreal-homeless-welfare-avenue-1.6470047"}
                              className={"btn btn-outline-light"} target={"_blank"}>
                            <span className={"text-dark"}>Read More</span>
                        </a>
                    </Col>
                </Row>
            </Container>



        </Container>
    )
}