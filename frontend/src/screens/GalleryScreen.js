import React from "react";
import {Container, Accordion, Carousel} from "react-bootstrap";
import {Link} from "react-router-dom"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Gallery} from "../components/gallery/Gallery";
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
import team1 from "../assets/images/about/gallery/team/1.jpg";
import team2 from "../assets/images/about/gallery/team/2.jpg";
import team3 from "../assets/images/about/gallery/team/3.jpg";
import team4 from "../assets/images/about/gallery/team/4.jpg";
import team5 from "../assets/images/about/gallery/team/5.jpg";
import team6 from "../assets/images/about/gallery/team/6.jpg";
import team7 from "../assets/images/about/gallery/team/7.jpg";
import team8 from "../assets/images/about/gallery/team/8.jpg";
import team9 from "../assets/images/about/gallery/team/9.jpg";
import meal1 from "../assets/images/about/gallery/meals/1.jpg";
import meal2 from "../assets/images/about/gallery/meals/2.jpg";
import meal3 from "../assets/images/about/gallery/meals/3.jpg";
import meal4 from "../assets/images/about/gallery/meals/4.jpg";
import meal5 from "../assets/images/about/gallery/meals/5.jpg";
import meal6 from "../assets/images/about/gallery/meals/6.jpg";
import meal7 from "../assets/images/about/gallery/meals/7.jpg";
import meal8 from "../assets/images/about/gallery/meals/8.jpg";
import meal9 from "../assets/images/about/gallery/meals/9.jpg";
import meal10 from "../assets/images/about/gallery/meals/10.jpg";
import meal11 from "../assets/images/about/gallery/meals/11.jpg";
import meal12 from "../assets/images/about/gallery/meals/12.jpg";
import meal13 from "../assets/images/about/gallery/meals/13.jpg";
import meal14 from "../assets/images/about/gallery/meals/14.jpg";
import help1 from "../assets/images/about/gallery/help/1.jpg";
import help2 from "../assets/images/about/gallery/help/2.jpg";
import help3 from "../assets/images/about/gallery/help/3.jpg";
import help4 from "../assets/images/about/gallery/help/4.jpg";
import help5 from "../assets/images/about/gallery/help/5.jpg";
import help6 from "../assets/images/about/gallery/help/6.jpg";
import vid1 from "../assets/images/about/gallery/videos/1.mp4";
import vid2 from "../assets/images/about/gallery/videos/2.MOV";
import vid3 from "../assets/images/about/gallery/videos/3.mp4";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
const team = [
    {
        "img": team1,
        "url": "../assets/images/about/gallery/team/1.jpg",
    },
    {
        "img": team2,
        "url": "../assets/images/about/gallery/team/2.jpg",
    },
    {
        "img": team3,
        "url": "../assets/images/about/gallery/team/3.jpg",
    },
    {
        "img": team4,
        "url": "../assets/images/about/gallery/team/4.jpg",
    },
    {
        "img": team5,
        "url": "../assets/images/about/gallery/team/5.jpg",
    },
    {
        "img": team6,
        "url": "../assets/images/about/gallery/team/6.jpg",
    },
    {
        "img": team7,
        "url": "../assets/images/about/gallery/team/7.jpg",
    },
    {
        "img": team8,
        "url": "../assets/images/about/gallery/team/8.jpg",
    },
    {
        "img": team9,
        "url": "../assets/images/about/gallery/team/9.jpg",
    },
]
const meals = [
    {
        "img": meal1,
        "url": "../assets/images/about/gallery/team/1.jpg",
    },
    {
        "img": meal2,
        "url": "../assets/images/about/gallery/team/2.jpg",
    },
    {
        "img": meal3,
        "url": "../assets/images/about/gallery/team/3.jpg",
    },
    {
        "img": meal4,
        "url": "../assets/images/about/gallery/team/4.jpg",
    },
    {
        "img": meal5,
        "url": "../assets/images/about/gallery/team/5.jpg",
    },
    {
        "img": meal6,
        "url": "../assets/images/about/gallery/team/6.jpg",
    },
    {
        "img": meal7,
        "url": "../assets/images/about/gallery/team/7.jpg",
    },
    {
        "img": meal8,
        "url": "../assets/images/about/gallery/team/8.jpg",
    },
    {
        "img": meal9,
        "url": "../assets/images/about/gallery/team/9.jpg",
    },
    {
        "img": meal10,
        "url": "../assets/images/about/gallery/team/10.jpg",
    },
    {
        "img": meal11,
        "url": "../assets/images/about/gallery/team/11.jpg",
    },
    {
        "img": meal12,
        "url": "../assets/images/about/gallery/team/12.jpg",
    },
    {
        "img": meal13,
        "url": "../assets/images/about/gallery/team/13.jpg",
    },
    {
        "img": meal14,
        "url": "../assets/images/about/gallery/team/14.jpg",
    },
]
const help = [
    {
        "img": help1,
        "url": "../assets/images/about/gallery/help/1.jpg",
    },
    {
        "img": help2,
        "url": "../assets/images/about/gallery/help/2.jpg",
    },
    {
        "img": help3,
        "url": "../assets/images/about/gallery/help/3.jpg",
    },
    {
        "img": help4,
        "url": "../assets/images/about/gallery/help/4.jpg",
    },
    {
        "img": help5,
        "url": "../assets/images/about/gallery/help/5.jpg",
    },
    {
        "img": help6,
        "url": "../assets/images/about/gallery/help/6.jpg",
    },
]

export function GalleryScreen(){
    // notes for video section:
    // 1. turn it into a loop
    // 2. only first video should have autoPlay
    // 3. add text?
    return (
        <Container className={"my-3"} fluid>
            <Link to={"/about"} className={"btn btn-lg btn-light rounded m-3 p-1 position-fixed"}
                  style={{"z-index": "9"}}>
                <FontAwesomeIcon icon={faArrowLeft} /> Go Back
            </Link>
            <h1 className={"text-center text-primary mb-5"}>WelfareAvenue Videos</h1>

            <Carousel data-interval="false"
                      className={"m-5 p-5 mt-1 pt-0 d-flex justify-content-center align-content-center"}
                      style={{"height": "80vh"}}>
                <Carousel.Item>
                    <video controls autoPlay preload loop className={"img-fluid"}>
                        <source src={vid1} type="video/mp4"/>
                            Your browser does not support the video tag.
                    </video>
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <video controls preload loop className={"img-fluid"}>
                        <source src={vid2} type="video/mp4"/>
                                Your browser does not support the video tag.
                    </video>
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <video controls preload loop className={"img-fluid"}>
                        <source src={vid3} type="video/mp4"/>
                                Your browser does not support the video tag.
                    </video>
                    <Carousel.Caption>
                        <h3></h3>
                        <p>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h1 className={"text-center text-primary mb-5"}>WelfareAvenue Photos</h1>
            <Accordion className={"mx-5 px-5 d-flex flex-row justify-content-center align-content-center"}
                defaultActiveKey="0" flush>
                <Accordion.Item  eventKey="0">
                    <Accordion.Header>Our Team</Accordion.Header>
                    <Accordion.Body>
                        <Gallery galleryImages={team} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Our Volunteers</Accordion.Header>
                    <Accordion.Body>
                        <Gallery galleryImages={volunteers} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Meals We Provide</Accordion.Header>
                    <Accordion.Body>
                        <Gallery galleryImages={meals} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Our Help</Accordion.Header>
                    <Accordion.Body>
                        <Gallery galleryImages={help} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}