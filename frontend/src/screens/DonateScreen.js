import React from "react";
import {Container, Col} from "react-bootstrap"
import vid1 from "../assets/donate/donate.mov";
import vid3 from "../assets/images/about/gallery/videos/3.mp4";


export default function DonateScreen(){
    return (
        <Container className={"mx-0 px-0"} fluid>
            <Container>
                <h1 className={"text-center py-4 text-primary"}>
                    It's The Season Of Giving
                </h1>
            </Container>
            <Container className={"d-flex flex-row justify-content-center align-content-center"}>
                <Col sm={6} className={"p-4"}>
                    <p className={"fs-4"}
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
            <Container>
                <h2 className={"text-center text-primary p-4 fs-1"}>Who We Help</h2>
                <Container className={"d-flex flex-row justify-content-center align-content-center"}>
                    <Col lg={4} md={4} sm={6}
                        className={"m-3 bg-light"}>
                        <Container className={"p-3"}>
                            <h3 className={"text-center text-primary"}>01</h3>
                            <p className={"text-secondary text-center fs-4"}>Deliver nutritious home made meals, hygiene essentials, and clothing to the less fortunate</p>
                        </Container>
                    </Col>
                    <Col lg={4} md={4} sm={6}
                        className={"m-3 bg-light"}>
                        <Container className={"p-3"}>
                            <h3 className={"text-center text-primary"}>02</h3>
                            <p className={"text-secondary text-center fs-4"}>We offer a volunteering experience that's enjoyable and inclusive for everyone.  </p>
                        </Container>
                    </Col>
                    <Col lg={4} md={4} sm={6}
                        className={"m-3 bg-light"}>
                        <Container className={"p-3"}>
                            <h3 className={"text-center text-primary"}>03</h3>
                            <p className={"text-secondary text-center fs-4"}>Provide students with an opportunity to gain valuable experience volunteering.</p>
                        </Container>
                    </Col>
                </Container>
            </Container>
            <Container className={"bg-primary p-5 my-5 mx-0"} fluid>
                <h2 className={"text-center text-light"}>
                    The value of money isn't what it can buy, but how many it can help
                </h2>
            </Container>
            <Container>
                <h2 className={"text-primary text-center fs-1"}>Our Roadmap</h2>
                <Container>
                    <p className={"fs-4 p-4"}
                        style={{"textAlign": "justify"}}>
                        As soon as you complete your donation, your gift will start its journey.
                        First your money will be turned into food, and then sent to our cook community to put
                        together meals that'll then be distributed to our unhoused neighbours every Saturday and Sunday,
                        Welfare Avenue is ready to deliver the food you send. Because you can't go there and hand out the
                        food yourself, we do it for you. Please send food to save a life today and join the fight against hunger.
                    </p>
                </Container>
                <Container className={"d-flex flex-row justify-content-center align-content-center bg-dark"}>
                    <Col lg={4} md={4} sm={6}
                        className={"m-3"}>
                        <Container className={"p-2"}>
                            <h3 className={"text-center text-primary"}>Phase 1</h3>
                            <ul className={"text-light fs-4 fw-light"}
                            //style={{"list-style": "none"}}
                            >
                                <li>Serve 250 nutritious meals every weekend <span className={"text-success"}>(Achieved)</span></li>
                                <li>Grow our volunteer database to over 200 people <span className={"text-success"}>(Achieved)</span></li>
                                <li>Register as a Non Profit Origination on provincial level <span className={"text-success"}>(Achieved)</span></li>
                                <li>Partner with 5 Montreal educational institutions <span className={"text-success"}>(3/5) </span></li>
                                <li>Develop partnerships with 5 local businesses <span className={"text-success"}>(2/5)</span></li>
                                <li>Raise funds through digital marketing & outreach for Phase 2 (in progress)</li>
                            </ul>
                        </Container>
                    </Col>
                    <Col lg={4} md={4} sm={6}
                        className={"m-3"}>
                        <Container className={"p-2"}>
                            <h3 className={"text-center text-primary"}>Phase 2</h3>
                            <ul className={"text-light fs-4 fw-light"}
                            //style={{"list-style": "none"}}
                            >
                                <li>Register the organization as Charity on the federal level (in progress)</li>
                                <li>Give out charitable receipts</li>
                                <li>Purchase a van to transport goods (in progress)</li>
                                <li>Purchase or receive storage space in downtown Montreal (in progress)</li>
                                <li>Develop partnerships with 10 local businesses (2/10)</li>
                                <li>Serve 500 nutritious meals on a weekly basis (in progress)</li>
                                <li>Grow our volunteer database to over 500 people</li>
                                <li>Provide sustainable jobs</li>
                            </ul>
                        </Container>
                    </Col>
                    <Col lg={4} md={4} sm={6}
                        className={"m-3"}>
                        <Container className={"p-2"}>
                            <h3 className={"text-center text-primary"}>Phase 2</h3>
                            <ul className={"text-light fs-4 fw-light"}
                            // style={{"list-style": "none"}}
                            >
                                <li>Provide affordable housing</li>
                                <li>Expand operations to other Canadian cities (Vancouver, Toronto, etc)</li>
                                <li>Serve 200 nutritious meals on a DAILY basis</li>
                            </ul>
                        </Container>
                    </Col>
                </Container>
            </Container>
            <br/>
        </Container>
    )
}