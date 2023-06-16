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


const words = [
    { text: 'Help', value: 640},
    {text: 'Love', value: 400},
    {text: 'Contribution', value: 530},
    {text: 'Volunteering', value: 690},
    {text: 'Welfare Avenue', value: 900},
    {text: 'Montreal', value: 350},
    {text: 'Care', value: 450},
    {text: 'Unity', value: 480},
    {text: 'Truth', value: 330},
    { text: 'Help', value: 640},
    {text: 'Love', value: 400},
    {text: 'Contribution', value: 530},
    {text: 'Volunteering', value: 690},
    {text: 'Welfare Avenue', value: 900},
    {text: 'Montreal', value: 350},
    {text: 'Care', value: 450},
    {text: 'Unity', value: 480},
    {text: 'Truth', value: 330},
    { text: 'Help', value: 640},
    {text: 'Love', value: 400},
    {text: 'Contribution', value: 530},
    {text: 'Volunteering', value: 690},
    {text: 'Welfare Avenue', value: 900},
    {text: 'Montreal', value: 350},
    {text: 'Care', value: 450},
    {text: 'Unity', value: 480},
    {text: 'Truth', value: 330},
]
const backgrounds = [
    {
        "img": slide1,
        "url": "../assets/images/slide1.jpg",
        "title": "Join our Community",
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
const partners = [
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
const fontSizeMapper = word => Math.log2(word.value) * 5;
const SimpleCloud = () => (
    <WordCloud
        data={words}
        fontSizeMapper={fontSizeMapper}
        width={900}
        height={250}
        rotate={0}
    />
)

export function HomeScreen() {
    return (
        <div>
            <UncontrolledCarousel backgrounds={backgrounds}/>
            <Container className={"start-0  px-0 position-relative"} fluid>
                <h2 className="text-center text-bg-secondary py-2 mt-0">
                    <FontAwesomeIcon icon={faHouse}/> Our Mission
                </h2>
                <p className="px-5 mx-5 lead py-3 mb-5" style={{"textAlign": "justify"}}>
                    Welfare Avenue is a not-for-profit organization whose mission is to work towards the advancement and
                    <strong>inclusion of low-income and unhoused individuals</strong> in the Greater Montreal Area, nationally,
                    and internationally, by relieving poverty and addressing <strong>food insecurity, isolation, and accessibility
                    to valuable resources.</strong>
                </p>
                <Container className={"py-0 my-0 d-flex align-content-center justify-content-center"}>
                    <Link to={"/about"} className={"btn btn-lg btn-light rounded"}>Read More About Us</Link>
                </Container>
            </Container>
            <Container className={"px-0"} fluid>
                <SimpleCloud/>
            </Container>
            <Container className={"px-0"} fluid>
                <h2 className="text-center text-bg-secondary py-2 mt-4">
                    What We Do
                </h2>
                <EventTabs events={events}  />
            </Container>
            <Container className={"px-0"} fluid>
                <h2 className="text-center text-bg-secondary py-2 mt-4">
                    Our Main Focus
                </h2>
                <OurFocus/>
            </Container>
            <Container className={"px-0"} fluid>
                <h2 className="text-center text-bg-primary py-2 my-0 mt-4">
                    Trusted By
                </h2>
                <Container className="w-100 bg-primary mt-0" fluid>
                    <Row className={"w-100 my-0 py-0"}>
                    {
                        partners.map(partner =>(
                            <Col key={partner.id} className="p-auto mx-auto"
                                 sm={12} md={8} lg={6} xl={4}>
                                <Partners partner={partner} />
                            </Col>
                        ))
                    }
                    </Row>
                </Container>
                <Container className={"d-flex flex-row"}>
                    <Col sm={12} sm={6} className={""}>
                        <Col sm={12} className={"p-4 m-1"}>
                            <p className={"fs-5"} style={{"textAlign": "justify"}}>1 {lorem}</p>
                        </Col>
                        <Col sm={12} className={"p-4 m-1"}>
                            <p className={"fs-5"} style={{"textAlign": "justify"}}>2 {lorem}</p>
                        </Col>
                    </Col>
                    <Col sm={12} sm={6} className={""}>
                        <Col sm={12} className={"p-4 m-1"}>
                            <p className={"fs-5"} style={{"textAlign": "justify"}}>3 {lorem}</p>
                        </Col>
                        <Col sm={12} className={"p-4 m-1"}>
                            <p className={"fs-5"} style={{"textAlign": "justify"}}>4 {lorem}</p>
                        </Col>
                    </Col>
                </Container>
            </Container>
        </div>
    )
}