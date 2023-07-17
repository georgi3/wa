import React from "react";
import {Container, Col, Row, Card} from "react-bootstrap";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import volunteeringHero from "../assets/images/volunteering/hero/volunteeringHero.jpg"
import UserDisplay from "../components/UserDisplay";
import member1 from "../assets/images/about/demo_team/1.webp";
import member2 from "../assets/images/about/demo_team/2.webp";
import member3 from "../assets/images/about/demo_team/3.webp";
import unknownUser from "../assets/images/svg/unknown_user_icon.svg";
import {HashLink} from "react-router-hash-link";
import fundRaisingImg from "../assets/images/activity/fundRaisers.png";
const events = [
    {
        id: 0,
        title: "Weekly Volunteering",
        date: "17/03/2023",
        location: "UQAM Station",
        time: "12:00 - 14:00",
        jobs: {
            drivers: 2,
            cooks: 3,
            servers: 4,
        }
    },
    {
        id: 1,
        title: "Upcoming Event",
        date: "17/03/2023",
        location: "UQAM Station",
        time: "12:00 - 14:00",
        jobs: {
            drivers: 2,
            cooks: 3,
            servers: 4,
        }
    },
    {
        id: 2,
        title: "Weekly Volunteering",
        date: "17/03/2023",
        location: "UQAM Station",
        time: "12:00 - 14:00",
        jobs: {
            drivers: 2,
            cooks: 3,
            servers: 4,
        }
    },
    {
        id: 3,
        title: "Upcoming Event",
        date: "17/03/2023",
        location: "UQAM Station",
        time: "12:00 - 14:00",
        jobs: {
            drivers: 2,
            cooks: 3,
            servers: 4,
        }
    },
]
const handleLink = () => {
    window.scrollTo(0, 0);
};
const proudestVolunteers = [
    {
        img: member1,
        userName: "uid",
        url: "../assets/images/about/demo_team/1.webp",
        name: "Steel MacDonald",
        position: "Volunteer Driver",
        timeVolunteered: 10,
    },
    {
        img: member2,
        userName: "uid",
        url: "../assets/images/about/demo_team/2.webp",
        name: "Shanada Kurbanali",
        position: "Volunteer Server",
        timeVolunteered: 8,
    },
    {
        img: member3,
        userName: "uid",
        url: "../assets/images/about/demo_team/3.webp",
        name: "Kellian Debargis",
        position: "Volunteer Cook",
        timeVolunteered: 9,
    },
]
export default function VolunteeringScreen() {
    const handleLink = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <MyNavbar />
            <HeroOverlay backgroundImage={volunteeringHero} />
            <Container>
                <Row className={"d-flex flex-row"}>
                    <Col className={"p-3"} sm={12} lg={6}>
                        <p className={"text-center lead fs-3"}>Find out more about our Weekly Volunteering events, what volunteering positions we offer and their responsibilities.
                        </p>
                        <Container className={"d-flex justify-content-center py-3"}>
                            <Link to={"/activity/weekly-volunteering"} onClick={handleLink} className={"w-75 btn btn-lg btn-outline-info"}>Let's go!</Link>
                        </Container>
                        <p className={"text-center lead pt-3 fs-3"}>Check out <Link onClick={handleLink} to={"/activity"} className={"text-info text-decoration-none"}>other events </Link>.</p>
                    </Col>
                    <Col className={"py-3"} sm={12} lg={6}>
                            <p className={"text-center lead fs-2"}>Our proudest volunteers this month!</p>
                        <ProudestVolunteers users={proudestVolunteers} />
                    </Col>
                </Row>
            </Container>
            <Container className={"px-0 mx-0 py-2 my-3"} fluid>
                <h3 id={"startVolunteeringId"} className={" text-center fw-light fs-2"}>Please select the upcoming event you would like to volunteer for!</h3>
                <VolunteeringOptions />
            </Container>
            <Footer />
        </>
    )
}

function VolunteerNotice(){
    return (
        <Container className={"bg-primary-subtle w-50 p-5"}>
            <h2 className={"text-secondary fw-bold text-center"}>Important</h2>
            <Container className={"d-flex"}>
                <p className={"lead text-secondary"} style={{"textAlign": "justify"}}>
                    If you decide to volunteer, please make sure to regularly check your email for any important information in regards to your booking! When you do book, you will receive a confirmation email in 3-5 days. Thank you!</p>
            </Container>
        </Container>
    )
}

function HeroOverlay({backgroundImage}) {
    return (
        <div className="hero-overlay shadow-lg" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <Container>
                <Row>
                    <Col className={"hero-text"}>
                        <h1 className={"lead fs-1"}>Volunteering</h1>
                        <p className={"lead fs-4 fw-light"}>Thank you for choosing to volunteer our team and your community highly appreciates it!</p>
                        <div className={""}>
                            <HashLink to={"#startVolunteeringId"} className={"w-50 btn btn-lg btn-outline-light"}>Jump in!</HashLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
function VolunteeringOptions(){
    return(
        <Container className={"d-flex justify-content-center flex-wrap my-5 px-1"} fluid>
            {
                events.map(e => {
                    return(
                        <Col lg={4} md={6} sm={12}
                             className={"align-content-center justify-content-center text-center"}
                             key={e.url}>
                            <div className={"border m-1"}>
                                <Container className={"p-1"}>
                                    <Link onClick={handleLink} to={`/activity/${e.id}`} as={"h2"} className={"d-flex justify-content-center  fs-3 text-decoration-none fw-light border btn btn-outline-info"}>
                                        {e.title}
                                    </Link>
                                    <p className={"text-dark text-center py-2 fs-4 fw-light"}>{e.date}</p>
                                    <Container className={"d-flex justify-content-between"}>
                                        <Container>
                                            <ul className={"lead fs-5  px-0"}>
                                                <li className={"list-unstyled d-flex justify-content-between py-0 border-bottom"}><span>Date:</span> <span>{e.date}</span></li>
                                                <li className={"list-unstyled d-flex justify-content-between py-0 border-bottom"}><span>Time:</span> <span>{e.time}</span></li>
                                                <li className={"list-unstyled d-flex justify-content-between py-0 border-bottom"}><span>Location:</span> <span>{e.location}</span></li>
                                                <li className={"list-unstyled"}><Link onClick={handleLink} to={"/apply"} className={"d-flex justify-content-between border-bottom py-1 text-decoration-none "}><span>Cooks Needed:</span> <span>7</span><span className={"btn btn-sm btn-info fs-6"}>Apply</span></Link></li>
                                                <li className={"list-unstyled"}><Link onClick={handleLink} to={"/apply"} className={"d-flex justify-content-between border-bottom py-1 text-decoration-none "}><span>Servers Needed:</span> <span>4</span><span className={"btn btn-sm btn-info fs-6"}>Apply</span></Link></li>
                                                <li className={"list-unstyled"}><Link onClick={handleLink} to={"/apply"} className={"d-flex justify-content-between border-bottom py-1 text-decoration-none "}><span>Drivers Needed:</span> <span>2</span><span className={"btn btn-sm btn-info fs-6"}>Apply</span></Link></li>
                                            </ul>
                                        </Container>
                                    </Container>
                                </Container>
                            </div>
                        </Col>
                    )
                })
            }
        </Container>
    )
}

function ProudestVolunteers({users}) {
    return(
        <Container className={"d-flex justify-content-center flex-row flex-wrap my-3"}>
            {
                users.map(member => {
                    return(
                        <Col xxl={2} xl={3} lg={3} md={4} sm={6}
                             className={"text-center"}
                             key={member.url}>
                            <Link onClick={handleLink} to={"/user-profile"} className={"text-decoration-none "}>
                                <Container className={"zoom"}>
                                    <img src={member.img} height={"135px"} className={"rounded-circle"} alt={member.title}/>
                                </Container>
                                <h4 className={"lead fs-4"}>{member.name}</h4>
                            </Link>
                            <div>
                                <p className={" lead"}>{member.position}</p>
                                <p className={"py-0 my-0"}>Total Volunteering Time: </p>
                                <p className={"lead text-info"}>{member.timeVolunteered} hours</p>
                            </div>
                        </Col>
                    )})
            }
        </Container>
    )
}
