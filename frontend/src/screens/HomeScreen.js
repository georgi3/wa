import React from "react";
import {UncontrolledCarousel} from "../components/UncontrolledCarousel";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.png";
import slide5 from "../assets/images/slide5.jpg";
import concordia from "../assets/parteners/concordia.svg"
import mcgill from "../assets/parteners/mcgill.svg"
import jAbbott from "../assets/parteners/jabbott.svg"
import ymca from "../assets/parteners/YMCA.svg"
import investQC from "../assets/parteners/investQC.svg"

import {Container, Row, Col} from "react-bootstrap";
// import {EventCard} from "../components/EventCard";
import {EventTabs} from "../components/EventTabs";
import {OurFocus} from "../components/OurFocus";
import {Partners} from "../components/Partners";

import {faHeart, faHouse, faGlasses} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ValuesCloud} from "../components/ValuesCloud";
import WordCloud from "react-d3-cloud";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import {LeftArrow} from "react-multi-carousel/lib/Arrows";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import member1 from "../assets/images/about/demo_team/1.webp"


const words = [
    { text: 'Help', value: 140},
    {text: 'Love', value: 100},
    {text: 'Contribution', value: 130},
    {text: 'Volunteering', value: 190},
    {text: 'Welfare Avenue', value: 100},
    {text: 'Montreal', value: 150},
    {text: 'Care', value: 150},
    {text: 'Unity', value: 180},
    {text: 'Truth', value: 130},
    { text: 'Help', value: 140},
    {text: 'Love', value: 100},
    {text: 'Contribution', value: 130},
    {text: 'Volunteering', value: 190},
    {text: 'Welfare Avenue', value: 100},
    {text: 'Montreal', value: 150},
    {text: 'Care', value: 150},
    {text: 'Unity', value: 180},
    {text: 'Truth', value: 130},
    { text: 'Help', value: 140},
    {text: 'Love', value: 100},
    {text: 'Contribution', value: 130},
    {text: 'Volunteering', value: 190},
    {text: 'Welfare Avenue', value: 100},
    {text: 'Montreal', value: 150},
    {text: 'Care', value: 150},
    {text: 'Unity', value: 180},
    {text: 'Truth', value: 130},
]
const backgrounds = [
    {
        "img": slide1,
        "url": "../assets/images/slide1.jpg",
        "title": "Join Welfare Avenue",
        "text": "WelfareAvenue is on a mission to make life around us better."
    },
    {
        "img": slide2,
        "url": "../assets/images/slide2.jpg",
        "title": "Donate",
        "text": ""
    },
    {
        "img": slide3,
        "url": "../assets/images/slide3.jpg",
        "title": "Volunteer",
        "text": ""
    },
    {
        "img": slide4,
        "url": "../assets/images/slide4.png",
        "title": "Give Back",
        "text": ""
    },
    {
        "img": slide5,
        "url": "../assets/images/slide5.jpg",
        "title": "Share",
        "text": ""
    },
];
const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
const partnersList = [
    {
        "name": "Concordia Logo",
        "id": 0,
        "img": concordia,
        "url": "https://www.concordia.ca/"
    },
    {
        "name": "McGill Logo",
        "id": 1,
        "img": mcgill,
        "url": "https://www.mcgill.ca/"
    },
    {
        "name": "John Abbot College Logo",
        "id": 2,
        "img": jAbbott,
        "url": "https://www.johnabbott.qc.ca/"
    },
    {
        "name": "Investissement Quebec Logo",
        "id": 3,
        "img": investQC,
        "url": "https://www.investquebec.com/quebec/fr"
    },
    {
        "name": "YMCA Logo",
        "id": 4,
        "img": ymca,
        "url": "https://www.ymcaquebec.org/"
    },
]
const partnersListDup = [...partnersList, ...partnersList]
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

const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);
const fontSizeMapper = word => Math.log2(word.value) * 5;
const SimpleCloud = () => (
    <WordCloud
        data={words}
        fontSizeMapper={fontSizeMapper}
        width={"400"}
        height={"70"}
        rotate={0}
        fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
    />
)

export function HomeScreen() {
    const handleLink = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            <MyNavbar />
            {(d, i) => schemeCategory10ScaleOrdinal(i)}
            {/*{}*/}
            <div>
                <UncontrolledCarousel backgrounds={backgrounds}/>
                <Container className={"start-0  px-0 position-relative"} fluid>
                    <h2 className="text-center text-light waves-bg-primary py-2 mt-0 ">
                        <FontAwesomeIcon icon={faHouse}/> Our Mission
                    </h2>
                    <p className="px-1 lead py-3 mb-5 fs-4 " style={{"textAlign": "justify", "margin": "0 5%"}}>
                        Welfare Avenue is a not-for-profit organization whose mission is to work towards the advancement and
                         <span className={"text-secondary fw-medium"}> inclusion of low-income and unhoused individuals</span> in the Greater Montreal Area, nationally,
                        and internationally, by relieving poverty and addressing <span className={"text-secondary fw-medium"}>food insecurity, isolation, and accessibility
                        to valuable resources.</span>
                    </p>
                    <Container className={"pb-3 mb-5 d-flex align-content-center justify-content-center"}>
                        <Link onClick={handleLink} to={"/about"} className={"btn btn-lg btn-outline-info rounded"}>Read More About Us</Link>
                    </Container>
                </Container>
                <Container className={"px-0 w-100 "}
                           style={{border: ""}}
                           fluid>
                    <SimpleCloud />
                </Container>
                <Container className={"px-0 py-3"} fluid>
                    <h2 className="text-center text-light waves-bg-primary py-2 mt-4 ">
                        What We Do
                    </h2>
                    <Container className={"py-3"} >
                        <EventTabs events={events} />
                    </Container>
                    <Container className={"py-0 my-0 d-flex align-content-center justify-content-center"}>
                        <Link onClick={handleLink} to={"/activity"} className={"btn btn-lg btn-outline-info rounded"}>Read More About Events</Link>
                    </Container>
                </Container>
                <Container className={"px-0 "} fluid>
                    <h2 className="text-center text-light waves-bg-primary py-2 mt-4">
                        Our Main Focus
                    </h2>
                    <OurFocus/>
                </Container>
                <Container className={"px-0"} fluid>
                    <h2 className="text-center text-light waves-bg-primary py-2 my-0 mt-4">
                        Our Partners
                    </h2>
                    <PartnerSection />
                    <Container className={"d-flex flex-row flex-wrap"} fluid>
                        <Col sm={12} md={6} className={""}>
                            <Col sm={12} className={"p-lg-4 m-1"}>
                                <p className={"lead "} style={{"textAlign": "justify"}}>1 {lorem}</p>
                            </Col>
                            <Col sm={12} className={"p-lg-4 m-1"}>
                                <p className={"lead "} style={{"textAlign": "justify"}}>2 {lorem}</p>
                            </Col>
                        </Col>
                        <Col sm={12} md={6} className={""}>
                            <Col sm={12} className={"p-lg-4 m-1"}>
                                <p className={"lead "} style={{"textAlign": "justify"}}>3 {lorem}</p>
                            </Col>
                            <Col sm={12} className={"p-lg-4 m-1"}>
                                <p className={"lead "} style={{"textAlign": "justify"}}>4 {lorem}</p>
                            </Col>
                        </Col>
                    </Container>
                </Container>
            </div>
            <Footer />
        </>
    )
}

function PartnerSection({}){
    return(
        <Container className={"px-0"} fluid>
            <div className={"top-slope text-light py-5"}>
                <Partners partners={partnersListDup} />
                <Container>
                    <Row className={"d-flex flex-row flex-sm-row-reverse"}>
                        <Col  sm={12} lg={6} className={"py-5"}>
                            <Container className={"d-flex justify-content-center"}>
                                <img src={member1} width={"100%"} className={"rounded-circle"}
                                     style={{"-webkit-filter": "grayscale(100%)", "filter": "grayscale(100%)", maxHeight: "300px", maxWidth: "250px"}}/>
                            </Container>
                        </Col>
                        <Col className={"p-3 text-dark"} sm={12} lg={6}>
                            <h2 className={"fw-light text-lg-start"}><span className={""}>CEO of Sportira </span> – Joe Doe</h2>
                            <Container className={"d-flex align-items-center"}>
                                <p className={"lead fs-4 my-3"} style={{"textAlign": "justify"}}>
                                    "WelfareAvenue is a remarkable charity that has transformed countless lives through their unwavering dedication and impactful initiatives. Their commitment to making a difference is truly inspiring."
                                </p>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Slope1 />
            <div className={"bottom-slope text-light py-5"}>
                <Container>
                    <Row className={"d-flex flex-row"}>
                        <Col  sm={12} lg={6} className={"py-5"}>
                            <Container className={"d-flex justify-content-center"}>
                                <img src={member1} width={"100%"} className={"rounded-circle"}
                                     style={{"-webkit-filter": "grayscale(100%)", "filter": "grayscale(100%)", maxHeight: "300px", maxWidth: "250px"}}/>
                            </Container>
                        </Col>
                        <Col className={"p-3"} sm={12} lg={6}>
                            <h2 className={"fw-light text-lg-end"}>CEO of Concordia – Joe Doe</h2>
                            <Container className={"d-flex align-items-center "}>
                                <p className={"lead fs-4 my-3"} style={{"textAlign": "justify"}}>
                                    "WelfareAvenue is a remarkable charity that has transformed countless lives through their unwavering dedication and impactful initiatives. Their commitment to making a difference is truly inspiring."
                                </p>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Slope2 />
            <div className={"top-slope text-light py-5"}>
                <Container>
                    <Row className={"d-flex flex-row flex-sm-row-reverse"}>
                        <Col  sm={12} lg={6} className={"py-5"}>
                            <Container className={"d-flex justify-content-center"}>
                                <img src={member1} width={"100%"} className={"rounded-circle"}
                                     style={{"-webkit-filter": "grayscale(100%)", "filter": "grayscale(100%)", maxHeight: "300px", maxWidth: "250px"}}/>
                            </Container>
                        </Col>
                        <Col className={"p-3 text-dark"} sm={12} lg={6}>
                            <h2 className={"fw-light text-lg-start"}><span className={""}>CEO of McGill </span> – Joe Doe</h2>
                            <Container className={"d-flex align-items-center"}>
                                <p className={"lead fs-4 my-3"} style={{"textAlign": "justify"}}>
                                    "WelfareAvenue is a remarkable charity that has transformed countless lives through their unwavering dedication and impactful initiatives. Their commitment to making a difference is truly inspiring."
                                </p>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
            <SlopeOut />
        </Container>
    )
}
function Slope1() {
    return (
        <div className="slope-container">
            <svg viewBox="0 70 500 60" preserveAspectRatio="none">
                <rect x="0" y="0" width="500" height="500" style={{stroke: "none"}}/>
                <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
                      style={{stroke: "none"}}></path>
            </svg>
        </div>
    )
}
function Slope2() {
    return (
        <div className="slope-container1">
            <svg viewBox="0 70 500 60" preserveAspectRatio="none">
                <rect x="0" y="0" width="500" height="500" style={{stroke: "none"}}/>
                <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
                      style={{stroke: "none"}}></path>
            </svg>
        </div>
    )
}
function SlopeOut() {
    return (
        <div className="slope-container-out">
            <svg viewBox="0 70 500 60" preserveAspectRatio="none">
                <rect x="0" y="0" width="500" height="500" style={{stroke: "none"}}/>
                <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
                      style={{stroke: "none"}}></path>
            </svg>
        </div>
    )
}