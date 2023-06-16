import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Gallery} from "../components/gallery/Gallery";
import {faHeart, faHouse, faGlasses} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Gallery } from "react-image";
import fontImage from "../assets/images/about/front.jpg"
import member1 from "../assets/images/about/demo_team/1.webp"
import member2 from "../assets/images/about/demo_team/2.webp"
import member3 from "../assets/images/about/demo_team/3.webp"
import member4 from "../assets/images/about/demo_team/4.webp"
import member5 from "../assets/images/about/demo_team/5.webp"
import testimonial1 from "../assets/images/about/testimonials/1.webp"
import testimonial2 from "../assets/images/about/testimonials/2.webp"
import testimonial3 from "../assets/images/about/testimonials/3.webp"
import testimonial4 from "../assets/images/about/testimonials/4.webp"
const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. But also the leap into electronic typesetting, remaining essentially unchanged.";
const team_members = [
    {
        "img": member1,
        "url": "../assets/images/about/demo_team/1.webp",
        "name": "Steel MacDonald",
        "position": "Executive Director"
    },
    {
        "img": member2,
        "url": "../assets/images/about/demo_team/2.webp",
        "name": "Shanada Kurbanali",
        "position": "Co-Executive Director"
    },
    {
        "img": member3,
        "url": "../assets/images/about/demo_team/3.webp",
        "name": "Kellian Debargis",
        "position": "Director of Outreach & Partnerships"
    },
    {
        "img": member4,
        "url": "../assets/images/about/demo_team/4.webp",
        "name": "Lailaah Wilson",
        "position": "Director of Operations"
    },
    {
        "img": member5,
        "url": "../assets/images/about/demo_team/5.webp",
        "name": "Angela Ghazarian",
        "position": "Director of Marketing"
    },
    {
        "img": member1,
        "url": "../assets/images/about/demo_team/1.webp1",
        "name": "Steel MacDonald",
        "position": "Executive Director"
    },
    {
        "img": member2,
        "url": "../assets/images/about/demo_team/2.webp2",
        "name": "Shanada Kurbanali",
        "position": "Co-Executive Director"
    },
    {
        "img": member3,
        "url": "../assets/images/about/demo_team/3.webp3",
        "name": "Kellian Debargis",
        "position": "Director of Outreach & Partnerships"
    },
    {
        "img": member4,
        "url": "../assets/images/about/demo_team/4.webp4",
        "name": "Lailaah Wilson",
        "position": "Director of Operations"
    },
    {
        "img": member5,
        "url": "../assets/images/about/demo_team/5.webp5",
        "name": "Angela Ghazarian",
        "position": "Director of Marketing"
    },
];

const testimonials = [
    {
        "img": testimonial1,
        "url": "../assets/images/about/testimonials/1.webp",
        "name": "Sewon,David",
        "position": "Volunteer Passenger",
        "testimony": "\"I had such an amazing experience with Welfare Avenue! In fact, it is such an outstanding opportunity to spread generosity and happiness towards the ones in need. I can safely say that I’m extremely proud to be part of this organization, and to be able to support others in such unprecedented times. I certainly had the best volunteering experience with Welfare Avenue, and I would totally recommend it!\""
    },
    {
        "img": testimonial2,
        "url": "../assets/images/about/testimonials/2.webp",
        "name": "Jabery, Ammar",
        "position": "Volunteer Driver",
        "testimony": "\"This pandemic has been really hard on my mental health as we were all stuck at home without a choice. Having nothing to do gave me a sensation that I was not doing sometime useful to do with my life. Volunteering for Welfare Avenue gave me my spirit back as I could finally do something to help during these uncertain times. You would be surprise as how little of an act such as serving plates or cooking can be so helpful for those in need in our community! I am so grateful that I discovered this organization that gave me more determination to help my community. I will certainly not stop doing this. I have met so many people from a multicultural background that inspired me to work harder to fight poverty for our homeless population in Montreal!\""
    },
    {
        "img": testimonial3,
        "url": "../assets/images/about/testimonials/3.webp",
        "name": "Batoul-Sadouk, Maryam",
        "position": "Volunteer Cook",
        "testimony": "\"I am happy I contributed to this experience!\" "
    },
    {
        "img": testimonial4,
        "url": "../assets/images/about/testimonials/4.webp",
        "name": "Martinez, Alejandra",
        "position": "Volunteer Cook",
        "testimony": "\"Being part of the Welfare Avenue’s project gives me a sense of accomplishment. I have learned how important is for those in need to be seen, to be acknowledged and to feel that we all are part of the same community.\""
    },
];

export function AboutScreen(){
    return (
        <>
            <Container style={{
                "backgroundImage": `url(${fontImage})`,
                "backgroundPosition": "center",
                "backgroundRepeat": "no-repeat",
                "backgroundSize": "cover",
                "width": "100%",
                "height": "61vh",
            }}
            fluid>
                <Container className={"h-100 d-flex flex-column justify-content-end text-center"}>
                    <h1 className={"text-light"}>About Us</h1>
                    <Container className={"py-5"}>
                        <Link to={"/about/gallery"} className={"btn btn-primary"}>
                            View Our Gallery
                        </Link>
                    </Container>
                </Container>
            </Container>
                <h2 className="text-center text-bg-primary py-2 mt-4">
                    Who We Are
                </h2>
                <p className="px-5 mx-5 lead py-3 mb-5" style={{"textAlign": "justify"}}>
                    Welfare Avenue is a community organization that is led by students from various fields of study and
                    academic institutions based both in Montreal and Ontario. Our team of staff and volunteers work
                    diligently with partnering organizations and community members at large to address the needs of the
                    population we serve and to <span className={"text-primary"}>work collaboratively to ensure a better future for all</span>.
                </p>
            <Container
                className={"d-flex flex-row flex-wrap justify-content-center"} fluid>
                <Col sm={9}
                    className={"mx-1"}>
                    <h2 className="text-center text-bg-secondary py-2 mt-4 rounded-3">
                        <FontAwesomeIcon icon={faHouse}/> Our Mission
                    </h2>
                    <p className="px-2 lead py-3 mb-5" style={{"textAlign": "justify"}}>
                        Welfare Avenue is a not-for-profit organization whose mission is to work towards the advancement and
                        <span className={"text-primary"}>inclusion of low-income and unhoused individuals</span> in the Greater Montreal Area, nationally,
                        and internationally, by relieving poverty and addressing <span className={"text-primary"}>food insecurity, isolation, and accessibility
                        to valuable resources.</span>
                    </p>
                </Col>
                <Col sm={9}
                    className={"mx-1"}>
                    <h2 className="text-center text-bg-secondary py-2 mt-4 rounded-3">
                        <FontAwesomeIcon icon={faGlasses}/> Our Vision
                    </h2>
                    <p className="px-2 lead py-3 mb-5" style={{"textAlign": "justify"}}>
                        {lorem}
                    </p>
                </Col>
                <Col sm={9}
                    className={"mx-1"}>
                    <h2 className="text-center text-bg-secondary py-2 mt-4 rounded-3">
                        <FontAwesomeIcon icon={faHeart}/> Our Values
                    </h2>
                    <p className="px-2 lead py-3 mb-5" style={{"textAlign": "justify"}}>
                        We believe that caring is sharing and engage all members of the community and other students to
                        give back to their communities in fulfilling ways. This community of our beneficiaries,
                        volunteers, and staff is built on the principle of mutual benefit. As our volunteers dedicate
                        their time and efforts to support marginalized groups and provide necessary resources, they
                        also gain <span className={"text-primary"}>invaluable experiences and personal growth</span>. Through their involvement, volunteers
                        develop empathy, leadership skills, and a deeper understanding of the challenges faced by
                        marginalized communities.
                    </p>
                </Col>
            </Container>
            <h2 className="text-center text-bg-primary py-2 mt-4">
                Our Team
            </h2>
            <Container  fluid>
                <Container
                    className={"d-flex flex-row flex-wrap my-5"}>
                    {/*later supposed to bring data from api*/}
                        {team_members.map(member => (
                            // <Container className={""} key={member.url} >
                                <Col xxl={2} xl={3} lg={3} md={4} sm={6}
                                    className={"align-content-center justify-content-center text-center"}
                                    key={member.url} >
                                    <Container className={""}>
                                        <img src={member.img} width={"100%"} className={"rounded-circle"}/>
                                    </Container>
                                    <a href="">
                                        <h4>{member.name}</h4>
                                    </a>
                                    <p>{member.position}</p>
                                </Col>
                            // </Container>
                            )
                        )}
                </Container>
                {/*<Container className={"d-grid"}>*/}
                {/*    <a className={"btn btn-lg btn-primary"} href="">Join Us!</a>*/}
                {/*</Container>*/}
            </Container>
            <h2 className="text-center text-bg-primary py-2 mt-4">
                Testimonials
            </h2>
            <Container  fluid>
                <Container
                    className={"d-flex flex-row flex-wrap my-5"}>
                    {/*later supposed to bring data from api*/}
                    {testimonials.map(testimony => (
                            <Col xxl={4} xl={4} lg={4} md={4} sm={6}
                                 className={"align-content-center justify-content-center text-center"}
                                 key={testimony.url} >
                                <Container className={""}>
                                    <img src={testimony.img} width={"100%"} className={"rounded-circle"}
                                         style={{
                                             "-webkit-filter": "grayscale(100%)",
                                            "filter": "grayscale(100%)"}}/>
                                </Container>
                                <h4>{testimony.name}</h4>
                                <p className={"text-primary"}>{testimony.position}</p>
                                <p>{testimony.testimony}</p>
                            </Col>
                        )
                    )}
                </Container>
            </Container>
            <h2 className="text-center text-bg-primary py-2 mt-4">
                Join Us!
            </h2>
            <Container className={"d-flex flex-wrap flex-row my-4 p-2"}>
                <Col className={"text-center align-content-between px-4"}
                    md={6} sm={12}>
                    <a className={"btn btn-outline-secondary"} href="">Sign up for Volunteering!</a>
                    <p className="px-2 py-4 lead" style={{"textAlign": "justify"}}>
                        In turn, our beneficiaries benefit from the dedicated support of our volunteers. They receive the
                        necessary resources, opportunities, and guidance to help them overcome the barriers that prevent them
                        from living their lives to the fullest. The mutually beneficial nature of our community fosters
                        a <span className={"text-primary"}>sense of empowerment, belonging, and hope </span>
                        among all those involved.
                    </p>
                </Col>
                <Col className={"text-center align-content-between px-4"}
                    md={6} sm={12}>
                    <Link className={"btn btn-outline-secondary"} to={"/signup"}>Become a team member!</Link>
                    <p className="px-2 py-4 lead" style={{"textAlign": "justify"}}>
                        Together, we strive towards achieving our organization's vision of a world free from poverty, where
                        marginalized groups are supported and given the tools to thrive. Through our collective efforts, we
                        aim to create <span className={"text-primary"}>positive change</span> and build a
                        <span className={"text-primary"}> brighter future </span> for everyone involved.
                    </p>
                </Col>
            </Container>
        </>
    )
}