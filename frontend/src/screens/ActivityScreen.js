import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Event from "../components/Event";
import {EventCard} from "../components/EventCard";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.png";
import slide5 from "../assets/images/slide5.jpg";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import {EventTabs} from "../components/EventTabs";
import weeklyEvent from "../assets/images/activity/weeklyEvent.png"
import collabs from "../assets/images/activity/collabs.png"
import clothesDonation from "../assets/images/activity/clothesDonation.png"
import fundRaisers from "../assets/images/activity/fundRaisers.png"
import {Link} from "react-router-dom";


const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
const events = [
    {
        "id": 0,
        "title": "Weekly Volunteering",
        "img": slide2,
        "body": lorem,
        "past": true,
    },
    {
        "id": 1,
        "title": "Upcoming Event",
        "img": slide3,
        "body": lorem,
        "past": false,
    },
    {
        "id": 2,
        "title": "Weekly Volunteering",
        "img": slide4,
        "body": lorem,
        "past": true,
    },
    {
        "id": 3,
        "title": "Upcoming Event",
        "img": slide5,
        "body": lorem,
        "past": false,
    },
    {
        "id": 4,
        "title": "Weekly Volunteering",
        "img": slide2,
        "body": lorem,
        "past": true,
    },
    {
        "id": 5,
        "title": "Upcoming Event",
        "img": slide3,
        "body": lorem,
        "past": false,
    },
    {
        "id": 6,
        "title": "Weekly Volunteering",
        "img": slide4,
        "body": lorem,
        "past": true,
    },
    {
        "id": 7,
        "title": "Upcoming Event",
        "img": slide5,
        "body": lorem,
        "past": false,
    }
]

export default function ActivityScreen(){
    const handleLink = () => {
        window.scrollTo(0, 0);
    };
    return(
        <>
            <MyNavbar />
            <Container fluid>
                <Container>
                    <h1 className={"text-center  py-4 fw-light"}>Our Activity</h1>
                    <Container className={"my-4 py-2 pb-3"}>
                        <Row>
                            <Col lg={3} md={6} sm={12} className={""}>
                                <h1 className={"lead text-center fs-4"}>
                                    <Link onClick={handleLink} to={"weekly-volunteering"} className={"btn btn-outline-info"}>Weekly Volunteering</Link>
                                </h1>
                                <div className={"activity-item shadow-lg my-5"}>
                                    <img src={weeklyEvent} className={"activity-img"} alt="Weekly Events Poster"/>
                                    <h4 className={"activity-item-title text-light lead fs-4 text-center"}>Weekly Events</h4>
                                    <p className={"activity-item-title mt-5 text-light text-center lead"}>Join our dedicated team of volunteers! </p>
                                    <Link onClick={handleLink} to={"/activity/weekly-volunteering"} className={"btn btn-outline-light"}>
                                        Find Out More
                                    </Link>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} className={""}>
                                <h1 className={"lead text-center fs-4"}>
                                    <Link onClick={handleLink} to={"/activity/fundraising"} className={"btn btn-outline-info"}>Fundraisers</Link>
                                </h1>
                                <div className={"activity-item shadow-lg my-5"}>
                                    <img src={fundRaisers} className={"activity-img"} alt="Fundraisers"/>
                                    <h4 className={"activity-item-title text-light lead fs-4 text-center"}>Fundraisers</h4>
                                    <p className={"activity-item-title mt-5 text-light text-center lead"}>Support our charity's fundraisers and help make a difference in the lives of those in need.</p>
                                    <Link onClick={handleLink} to={"/activity/fundraising"} className={"btn btn-outline-light"}>
                                        Find Out More
                                    </Link>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} className={""}>
                                <h1 className={"lead text-center fs-4"}>
                                    <Link onClick={handleLink} to={"/activity/club-volunteering"} className={"btn btn-outline-info"}>Club Volunteering</Link>
                                </h1>
                                <div className={"activity-item shadow-lg my-5"}>
                                    <img src={collabs} className={"activity-img"} alt="Corporate Volunteer"/>
                                    <h4 className={"activity-item-title text-light lead fs-4 text-center"}>Club Volunteering</h4>
                                    <p className={"activity-item-title mt-5 text-light text-center lead"}>Have a group 10 or more wanting to volunteer all together? Look no further sign up here!</p>
                                    <Link onClick={handleLink} to={"club-volunteering"} className={"btn btn-outline-light"}>
                                        Find Out More
                                    </Link>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} className={""}>
                                <h1 className={"lead text-center fs-4"}>
                                    <Link onClick={handleLink} to={"donate-essentials"} className={"btn btn-outline-info"}>Donate Essentials</Link>
                                </h1>
                                <div className={"activity-item shadow-lg my-5"}>
                                    <img src={clothesDonation} className={"activity-img"} alt="Essential Donations"/>
                                    <h4 className={"activity-item-title text-light lead fs-4 text-center"}>Donate the Essentials</h4>
                                    <p className={"activity-item-title mt-5 text-light text-center lead"}>Helping the community by giving unused clothes, food and other items!</p>
                                    <Link onClick={handleLink} to={"donate-essentials"} className={"btn btn-outline-light"}>
                                        Find Out More
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container className={"d-flex flex-row"}>
                        <Col className={"p-4"} sm={12} md={6}>
                            <p className={"lead fs-4 "} style={{"textAlign": "justify"}}>{lorem}</p>
                        </Col>
                        <Col className={"p-4"} sm={12} md={6}>
                            <p className={"lead fs-4 "} style={{"textAlign": "justify"}}>{lorem}</p>
                        </Col>
                    </Container>
                    <Container fluid>
                        <EventTabs events={events} />
                    </Container>
                </Container>
            </Container>
            <Footer />
        </>
    )
}