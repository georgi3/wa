import React, {useState} from "react";
import {Container, Col, Row} from "react-bootstrap";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import weeklyEvent from "../assets/images/activity/weeklyEvent.png"
import frImg1 from "../assets/images/activity/fundraisers/fr_reggies/1.jpg";
import frImg2 from "../assets/images/activity/fundraisers/fr_reggies/2.jpg";
import frImg3 from "../assets/images/activity/fundraisers/fr_reggies/3.jpg";
import frImg4 from "../assets/images/activity/fundraisers/fr_reggies/4.jpg";
import frImg5 from
        "../assets/images/activity/fundraisers/fr_reggies/5.jpg";
import frImg6 from
        "../assets/images/activity/fundraisers/fr_reggies/6.jpg";
import frImg7 from
        "../assets/images/activity/fundraisers/fr_reggies/7.jpg";
import frImg8 from
        "../assets/images/activity/fundraisers/fr_reggies/8.jpg";
import frImg9 from
        "../assets/images/activity/fundraisers/fr_reggies/9.jpg";
import ImageListGallery from "../components/gallery/ImageListGallery";
import {Link} from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import member1 from "../assets/images/about/demo_team/1.webp";
import member2 from "../assets/images/about/demo_team/2.webp";
import member3 from "../assets/images/about/demo_team/3.webp";
import member4 from "../assets/images/about/demo_team/4.webp";
import heroImg from "../assets/images/activity/fundraisers/fr_reggies/1.jpg"
import UserDisplay from "../components/UserDisplay";
import SocialMediaLinks from "../components/SocialMediaLinks";
import {faFacebook, faInstagram, faLinkedin, faTiktok, faTwitter} from "@fortawesome/free-brands-svg-icons";
const frImgs = [
    {
        img: frImg1,
        url: "../assets/images/activity/fundraisers/fr_reggies/1.jpg",
    },
    {
        img: frImg2,
        url: "../assets/images/activity/fundraisers/fr_reggies/2.jpg",
    },
    {
        img: frImg3,
        url:"../assets/images/activity/fundraisers/fr_reggies/3.jpg",
    },
    {
        img: frImg4,
        url: "../assets/images/activity/fundraisers/fr_reggies/4.jpg",
    },
    {
        img: frImg5,
        url: "../assets/images/activity/fundraisers/fr_reggies/5.jpg",
    },
    {
        img:  frImg6,
        url:  "../assets/images/activity/fundraisers/fr_reggies/6.jpg",
    },
    {
        img: frImg7,
        url: "../assets/images/activity/fundraisers/fr_reggies/7.jpg",
    },
    {
        img: frImg8,
        url: "../assets/images/activity/fundraisers/fr_reggies/8.jpg",
    },
    {
        img: frImg9,
        url: "../assets/images/activity/fundraisers/fr_reggies/9.jpg",
    },
];
const events = [
    {
        id: 0,
        title: "Weekly Volunteering",
        img: frImg1,
        par1: "We successfully concluded our fundraising campaign for the event! Thanks to the incredible support and contributions from our generous donors, we were able to surpass our fundraising goal. The funds raised played a crucial role in making the event a resounding success.",
        par2: "The support we received from our community was truly inspiring. Donors from all walks of life came forward to contribute, demonstrating their commitment to our cause. Their generous contributions enabled us to enhance every aspect of the event. From venue arrangements to entertainment, catering to promotional materials, we spared no effort in ensuring a seamless and memorable experience for all attendees.",
        par3: "Not only did our fundraising efforts enable us to organize an outstanding event, but they also allowed us to extend our outreach initiatives within the community. We were able to provide support to local organizations, sponsor educational programs, and make a positive impact on those in need. The success of our fundraising campaign showcases the power of collective action and highlights the incredible compassion and generosity of our supporters.",
        par4: "We extend our heartfelt gratitude to all who participated and helped create an unforgettable event that left a positive and lasting impact on everyone involved. Your contributions have made a significant difference and will continue to inspire us as we strive to create more transformative experiences for our community in the future. Together, we have shown that by joining forces, we can achieve remarkable things and make a profound difference in the lives of others.",
        par5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, leo a dignissim lacinia, dolor diam tristique est, id dictum turpis nisl et ante. Fusce dapibus purus in tellus eleifend, at interdum nulla vulputate. Nulla facilisi. Sed tincidunt eleifend libero, a ullamcorper justo malesuada in. Maecenas dignissim auctor mauris, nec semper nunc lobortis et. Pellentesque sit amet risus vitae metus fermentum fermentum. ",
        socialMedias:  [
            {
                icon: faInstagram,
                href: "",
                color: "text-info"
            },
            {
                icon: faTiktok,
                href: "",
                color: "text-info"
            },
            {
                icon: faFacebook,
                href: "",
                color: "text-info"
            },
            {
                icon: faLinkedin,
                href: "",
                color: "text-info"
            },
            {
                icon: faTwitter,
                href: "",
                color: "text-info"
            },
        ]
    },
];
export default function FundraiserEventScreen(){
    // i guess i will be reading event's id from URL and then fetching it from the db
    const event = events[0];
    // const dateTimeAfterThreeDays = new Date("16/07/2023").getTime();
    const THREE_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();


    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    return(
        <>
            <MyNavbar />
            <HeroOverlay backgroundImage={event.img} />
            <Container fluid>
                <Container>
                    <Row className={"d-flex flex-row"}>
                        <Col className={"p-3 mt-2"} sm={12} lg={6}>
                            <h2 className={"fw-light text-lg-start"}><span className={"border-decor"}>Event Summary</span></h2>
                            <p className={"lead fs-4 "} style={{"textAlign": "justify"}}>{event.par1}</p>
                            <Container>
                                <p className={"text-info lead text-center"}>See more in our social media</p>
                                <SocialMediaLinks socials={event.socialMedias} />
                            </Container>
                        </Col>
                        <Col  sm={12} lg={6}
                              className={"p-3"}>
                            <h2 className={" fw-light text-center"}>Images From the Event</h2>
                            <Container className={"d-flex justify-content-center"}>
                                <div className={"shadow-lg"}>
                                    <ImageListGallery galleryImages={frImgs} />
                                </div>
                            </Container>
                        </Col>
                        <Col  sm={12} lg={6} className={"p-3"}>
                            <p className={"lead fs-4 "} style={{"textAlign": "justify"}}>{event.par2}</p>
                            <p className={"lead fs-4 "} style={{"textAlign": "justify"}}>{event.par3}</p>
                        </Col>
                        <Col  sm={12} lg={6} className={"p-3"}>
                            <p className={"lead fs-4 "} style={{"textAlign": "justify"}}>{event.par4}</p>
                            <p className={"lead fs-4 "} style={{"textAlign": "justify"}}>{event.par5}</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className={"px-0"} fluid>
                <h1 className={"text-bg-danger text-center lead py-3 fw-normal fs-1"}> Upcoming Fundraiser</h1>
            </Container>
            <Container fluid>
                <Container>
                    <h1 className={" text-center py-3 mt-1"}>Next {event.title} Starts In: </h1>
                    <p className={" text-center fs-4 lead d-flex align-content mt-5"}>
                        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                    </p>
                </Container>
                <Container>
                    <Row className={"d-flex flex-row"}>
                        <Col className={"p-3"} sm={12} lg={6}>
                            <h2 className={" fw-light text-center"}>Description: </h2>
                            <p className={"lead fs-4 "} style={{"textAlign": "justify"}}>Initial Text {event.body}</p>
                            <ul className={"lead fs-4  px-0"}>
                                <li className={"list-unstyled d-flex justify-content-between py-1 border-bottom"}><span>Date:</span> <span>16/07/2023</span></li>
                                <li className={"list-unstyled d-flex justify-content-between py-1 border-bottom"}><span>Time:</span> <span>12:00-14:00</span></li>
                                <li className={"list-unstyled d-flex justify-content-between py-1 border-bottom"}><span>Location:</span> <span>UQAM station</span></li>
                                <li className={"list-unstyled"}><Link to={"/apply"} className={"d-flex justify-content-between border-bottom py-2 text-decoration-none "}><span>Cooks Needed:</span> <span>7</span><span className={"btn btn-outline-light"}>Apply</span></Link></li>
                                <li className={"list-unstyled"}><Link to={"/apply"} className={"d-flex justify-content-between border-bottom py-2 text-decoration-none "}><span>Servers Needed:</span> <span>4</span><span className={"btn btn-outline-light"}>Apply</span></Link></li>
                                <li className={"list-unstyled"}><Link to={"/apply"} className={"d-flex justify-content-between border-bottom py-2 text-decoration-none "}><span>Drivers Needed:</span> <span>2</span><span className={"btn btn-outline-light"}>Apply</span></Link></li>
                            </ul>
                        </Col>
                        <Col  sm={12} lg={6} className={"p-5"}>
                            <Container className={"d-flex justify-content-center"}>
                                <img height={500} className={"img-fluid shadow-lg"} src={event.img} alt="Event Image"/>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/*Filter between two containers based on the date of the event*/}
            <Footer />
        </>
    )
}

function HeroOverlay({backgroundImage}) {
    return (
        <div className="hero-overlay shadow-lg" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <Container>
                <Row>
                    <Col className={"hero-text"}>
                        <h1 className={"fs-1 lead"}>Reggies Event</h1>
                        <p className={"fs-4 lead"}>09/07/2023</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
