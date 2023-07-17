import React from "react";
import {Container, Col, Row, Card} from "react-bootstrap";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import fundRaisingImg from "../assets/images/activity/fundRaisers.png"


const handleLink = () => {
    window.scrollTo(0, 0);
};

export default function FundraiserScreen() {
    return (
        <>
            <MyNavbar />
            <Container fluid>
                <Container>
                    <h1 className={" text-center py-3 mt-1"}>Fundraising</h1>
                </Container>
                <Container>
                    <Row className={"d-flex flex-row flex-sm-row-reverse px-0"}>
                        <Col  sm={12} lg={6} className={"py-5"}>
                            <Container className={"d-flex justify-content-center px-0"}>
                                <img height={500} className={"img-fluid shadow-lg"} src={fundRaisingImg} alt="Club Volunteering Post"/>
                            </Container>
                        </Col>
                        <Col className={"p-3"} sm={12} lg={6}>
                            <h2 className={" fw-light text-lg-start"}><span className={"border-decor"}>Description:</span> </h2>
                            <p className={"lead fs-4 my-3"} style={{"textAlign": "justify"}}>

                            </p>
                            <Container className={"px-0 py-3"} fluid>
                                <h2 className={"fs-4 fw-light"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </h2>
                                <Container className={"d-flex justify-content-center"}>
                                    <span className={"btn btn-outline-info"}>Lets Collaborate!</span>
                                </Container>
                                <ul className={"lead fs-4 "} style={{"textAlign": "justify"}}>
                                    <li className={"py-2"}></li>
                                    <li className={"py-2"}></li>
                                    <li className={"py-2"}></li>
                                </ul>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className={"px-0"} fluid>
                <h2 className="text-center text-light waves-bg-primary py-2">
                    Our latest fundraisers
                </h2>
                <Container>
                    <CustomCard />
                </Container>
            </Container>
            <Footer />
        </>
    )
}

const CustomCard = () => {
    const fundraisersEvents = [
        {
            id: 1,
            title: 'Massa',
            date: 'July 1, 2023',
            image: fundRaisingImg,
        },
        {
            id: 2,
            title: 'Reggies',
            date: 'July 5, 2023',
            image: fundRaisingImg,
        },
        {
            id: 3,
            title: 'Massa',
            date: 'July 1, 2023',
            image: fundRaisingImg,
        },
        {
            id: 4,
            title: 'Reggies',
            date: 'July 5, 2023',
            image: fundRaisingImg,
        },
        // Add more card data as needed
    ];

    return (
        <Container className={"my-3"}>
            <Row>
                {fundraisersEvents.map((fr_event) => (
                    <Col key={fr_event.id} md={6} lg={4} xl={3}>
                        <Link onClick={handleLink} to={`/activity/fundraising/${fr_event.id}`} className="custom-link">
                            <Card className="custom-card">
                                <Card.Img variant="top" src={fr_event.image} alt={fr_event.title} />
                                <Card.Body>
                                    <Card.Title>{fr_event.title}</Card.Title>
                                    <Card.Text>{fr_event.date}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
