import React, {useState} from "react";
import {Container, Col, Row} from "react-bootstrap";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import weeklyEvent from "../assets/images/activity/weeklyEvent.png"
import vol1 from "../assets/images/about/gallery/volunteers/1.webp";
import vol2 from "../assets/images/about/gallery/volunteers/2.webp";
import vol3 from "../assets/images/about/gallery/volunteers/3.webp";
import vol4 from "../assets/images/about/gallery/volunteers/4.webp";
import vol5 from "../assets/images/about/gallery/volunteers/5.webp";
import vol6 from "../assets/images/about/gallery/volunteers/6.webp";
import vol7 from "../assets/images/about/gallery/volunteers/7.webp";
import vol8 from "../assets/images/about/gallery/volunteers/8.webp";
import vol9 from "../assets/images/about/gallery/volunteers/9.webp";
import vol10 from "../assets/images/about/gallery/volunteers/10.webp";
import vol11 from "../assets/images/about/gallery/volunteers/11.webp";
import vol12 from "../assets/images/about/gallery/volunteers/12.webp";
import vol13 from "../assets/images/about/gallery/volunteers/13.webp";
import vol14 from "../assets/images/about/gallery/volunteers/14.jpg";
import vol15 from "../assets/images/about/gallery/volunteers/15.jpg";
import vol16 from "../assets/images/about/gallery/volunteers/16.jpg";
import vol17 from "../assets/images/about/gallery/volunteers/17.jpg";
import vol18 from "../assets/images/about/gallery/volunteers/18.jpg";
import vol19 from "../assets/images/about/gallery/volunteers/19.jpg";
import vol20 from "../assets/images/about/gallery/volunteers/20.jpg";
import ImageListGallery from "../components/gallery/ImageListGallery";
import {Link} from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import member1 from "../assets/images/about/demo_team/1.webp";
import member2 from "../assets/images/about/demo_team/2.webp";
import member3 from "../assets/images/about/demo_team/3.webp";
import member4 from "../assets/images/about/demo_team/4.webp";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import UserDisplay from "../components/UserDisplay";
const volunteers = [
    {
        "img": vol1,
        "url": "../assets/images/about/gallery/1.webvolunteers/p",
    },
    {
        "img": vol2,
        "url": "../assets/images/about/gallery/2.webvolunteers/p",
    },
    {
        "img": vol3,
        "url": "../assets/images/about/gallery/3.webvolunteers/p",
    },
    {
        "img": vol4,
        "url": "../assets/images/about/gallery/4.webvolunteers/p",
    },
    {
        "img": vol5,
        "url": "../assets/images/about/gallery/5.webvolunteers/p",
    },
    {
        "img": vol6,
        "url": "../assets/images/about/gallery/6.webvolunteers/p",
    },
    {
        "img": vol7,
        "url": "../assets/images/about/gallery/7.webvolunteers/p",
    },
    {
        "img": vol8,
        "url": "../assets/images/about/gallery/8.webvolunteers/p",
    },
    {
        "img": vol9,
        "url": "../assets/images/about/gallery/9.webvolunteers/p",
    },
    {
        "img": vol10,
        "url": "../assets/images/about/gallery/volunteers/10.webp",
    },
    {
        "img": vol11,
        "url": "../assets/images/about/gallery/volunteers/11.webp",
    },
    {
        "img": vol12,
        "url": "../assets/images/about/gallery/volunteers/12.webp",
    },
    {
        "img": vol13,
        "url": "../assets/images/about/gallery/volunteers/13.webp",
    },
    {
        "img": vol14,
        "url": "../assets/images/about/gallery/volunteers/14.jpg",
    },
    {
        "img": vol15,
        "url": "../assets/images/about/gallery/volunteers/15.jpg",
    },
    {
        "img": vol16,
        "url": "../assets/images/about/gallery/volunteers/16.jpg",
    },
    {
        "img": vol17,
        "url": "../assets/images/about/gallery/volunteers/17.jpg",
    },
    {
        "img": vol18,
        "url": "../assets/images/about/gallery/volunteers/18.jpg",
    },
    {
        "img": vol19,
        "url": "../assets/images/about/gallery/volunteers/19.jpg",
    },
    {
        "img": vol20,
        "url": "../assets/images/about/gallery/volunteers/20.jpg",
    },
];

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
const events = [
    {
        "id": 0,
        "title": "Weekly Volunteering",
        "img": weeklyEvent,
        "body": lorem,
        "past": true,
    },
];

export default function EventScreen(){
    // i guess i will be reading event's id from URL and then fetching it from the db
    const event = events[0];
    // const dateTimeAfterThreeDays = new Date("16/07/2023").getTime();
    const THREE_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    return(
        <>
            <MyNavbar />
            <Container fluid>
                <Container className={"px-0"}>
                    <h1 className={" text-center py-3 mt-1"}>Next {event.title} Starts In: </h1>
                    <p className={" text-center fs-4 lead d-flex align-content mt-5"}>
                        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                    </p>
                </Container>
                <Container>
                    <Row className={"d-flex flex-row flex-sm-row-reverse"}>
                        <Col  sm={12} lg={6} className={"py-5"}>
                            <Container className={"d-flex justify-content-center"}>
                                <img height={500} className={"img-fluid shadow-lg"} src={event.img} alt="Event Image"/>
                            </Container>
                        </Col>
                        <Col className={"p-3"} sm={12} lg={6}>
                            <h2 className={" fw-light text-lg-start"}><span className={"border-decor"}>Description:</span> </h2>
                            <p className={"lead fs-4 "} style={{"textAlign": "justify"}}>Initial Text {event.body}</p>
                            <ul className={"lead fs-4  px-0"}>
                                <li className={"list-unstyled d-flex justify-content-between py-1 border-bottom"}><span>Date:</span> <span>16/07/2023</span></li>
                                <li className={"list-unstyled d-flex justify-content-between py-1 border-bottom"}><span>Time:</span> <span>12:00-14:00</span></li>
                                <li className={"list-unstyled d-flex justify-content-between py-1 border-bottom"}><span>Location:</span> <span>UQAM station</span></li>
                                <li className={"list-unstyled"}><Link to={"/apply"} className={"d-flex justify-content-between border-bottom py-2 text-decoration-none "}><span>Cooks Needed:</span> <span>7</span><span className={"btn btn-outline-info"}>Apply</span></Link></li>
                                <li className={"list-unstyled"}><Link to={"/apply"} className={"d-flex justify-content-between border-bottom py-2 text-decoration-none "}><span>Servers Needed:</span> <span>4</span><span className={"btn btn-outline-info"}>Apply</span></Link></li>
                                <li className={"list-unstyled"}><Link to={"/apply"} className={"d-flex justify-content-between border-bottom py-2 text-decoration-none "}><span>Drivers Needed:</span> <span>2</span><span className={"btn btn-outline-info"}>Apply</span></Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <h1 className={"text-bg-danger text-center "}>Past</h1>
            {/*Filter between two containers based on the date of the event*/}
            <Container fluid>
                <Container>
                    <h1 className={" text-center py-3"}>Weekly Volunteering</h1>
                    <h3 className={" text-center py-1 lead fs-3"}>Date: 09/07/2023</h3>
                </Container>
                <Container>
                    <Row className={"d-flex flex-row"}>
                        <Col className={"p-3 mt-2"} sm={12} lg={6}>
                            <h2 className={" fw-light text-lg-start"}><span className={"border-decor"}>Event Summary</span></h2>
                            <p className={"lead fs-4 "} style={{"textAlign": "justify"}}>After the event description {event.body}</p>
                            <ul className={"lead fs-4  px-0"}>
                                <li className={"list-unstyled d-flex justify-content-between py-1 border-bottom"}><span>Location:</span> <span>UQAM station</span></li>
                                <li className={"list-unstyled d-flex justify-content-between py-1 border-bottom"}><span>Total Number of Volunteers:</span> <span>11</span></li>
                                <li className={"list-unstyled d-flex justify-content-between py-1 border-bottom"}><span>Total Meals Served</span> <span>100</span></li>
                                <li className={"list-unstyled d-flex justify-content-between py-1 border-bottom"}><span>Other Stats</span> <span>20</span></li>
                            </ul>
                        </Col>
                        <Col  sm={12} lg={6}
                              className={"p-3"}>
                            <h2 className={" fw-light text-center"}>Images From the Event</h2>
                            <Container className={"d-flex justify-content-center"}>
                                <div className={"shadow-lg"}>
                                    <ImageListGallery galleryImages={volunteers} />
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <h2 className={"text-center  my-3 py-2"}>Volunteers who participated</h2>
                    <p className={"text-center  fs-4 lead"}>We thank our volunteers who helped us make it happen</p>
                    <UserDisplay users={team_members} areVolunteers={true} />
                </Container>
            </Container>
            <Footer />
        </>
    )
}

const team_members = [
    {
        img: member1,
        userName: "uid",
        url: "../assets/images/about/demo_team/1.webp",
        name: "Steel MacDonald",
        position: "Volunteer Driver",
        testimonial: "",
    },
    {
        img: member2,
        userName: "uid",
        url: "../assets/images/about/demo_team/2.webp",
        name: "Shanada Kurbanali",
        position: "Volunteer Driver",
        testimonial: "I started volunteering to give back to my community, but little did I know that I would receive so much more in return. The connections and friendships I've made are priceless.",
    },
    {
        userName: null,
        name: "Joe Doe",
        position: "Volunteer Cook",
        testimonial: "",

    },
    {
        userName: null,
        name: "Gill Doe",
        position: "Volunteer Server",
        testimonial: "",

    },
    {
        img: member3,
        userName: "uid",
        url: "../assets/images/about/demo_team/3.webp",
        name: "Kellian Debargis",
        position: "Director of Outreach & Partnerships",
        testimonial: "Volunteering changed my perspective on life. It's incredible how a small act of kindness can make a huge difference in someone's life.",
    },
    {
        img: member4,
        userName: "uid",
        url: "../assets/images/about/demo_team/4.webp",
        name: "Lailaah Wilson",
        position: "Volunteer Cook",
        testimonial: "Volunteering has given me a sense of purpose and fulfillment. It's amazing to see the impact we can make when we come together for a common cause.",
    },
    {
        userName: null,
        name: "Bill Doe",
        position: "Volunteer Server",
        testimonial: "",

    },
    {
        userName: null,
        name: "Louis Doe",
        position: "Volunteer Server",
        testimonial: "",

    }
]
