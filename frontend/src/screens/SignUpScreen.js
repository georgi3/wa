import React from "react";
import {Link} from "react-router-dom";
import {Container, Col, Form, Row, Button} from "react-bootstrap";
import {faGoogle, faFacebook, faLinkedin, faInstagram, faTiktok, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faUser, faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import signupImg from "../assets/images/signup1.webp"
import SocialMediaLinks from "../components/SocialMediaLinks";

const socialMedias = [
    {
        icon: faGoogle,
        href: "",
        color: "text-light"
    },
    {
        icon: faFacebook,
        href: "",
        color: "text-light"
    },
    {
        icon: faLinkedin,
        href: "",
        color: "text-light"
    },
];

export default function SignUpScreen(){
    return (
        <Container className={"waves-bg-secondary d-flex flex-row flex-wrap p-0 align-items-center"} fluid>
            <Col  className={"p-0"} fluid>
                <img className={"img-fluid vh-100"}
                     style={{
                         "-webkit-filter": "grayscale(100%)",
                         "filter": "grayscale(100%)"
                     }}
                     src={signupImg}
                     alt="WelfareAvenue Image"/>
            </Col>
            <Col  className={""} fluid>
                <SignUpForm/>
            </Col>
        </Container>
    )
}


function SignUpForm(){
    return(
        <Form className={"p-3"}>
            <Container className={"py-2 text-center"}>
                <h1 className={"text-light"}>Join our Community!</h1>
            </Container>
            <Form.Group className={"d-flex flex-row align-content-center justify-content-center my-2 py-2"}
                        controlId={"formRegistrationFName"}>
                <Form.Label className={"px-3"}>
                    <FontAwesomeIcon className={"text-light mt-2"} size={"lg"}  icon={faUser}/></Form.Label>
                <Form.Control className={"py-2 w-75"} type={"text"} placeholder={"Enter your first name"}/>
            </Form.Group>
            <Form.Group className={"d-flex flex-row align-content-center justify-content-center my-2 py-2"}
                        controlId={"formRegistrationLName"}>
                <Form.Label className={"px-3"}>
                    <FontAwesomeIcon className={"text-light mt-2"} size={"lg"}  icon={faUser}/></Form.Label>
                <Form.Control className={"py-2 w-75"} type={"text"} placeholder={"Enter your last name"}/>
            </Form.Group>
            <Form.Group className={"d-flex flex-row align-content-center justify-content-center my-2 py-2"}
                        controlId={"formRegistrationEmail"}>
                <Form.Label className={"px-3"}>
                    <FontAwesomeIcon className={"text-light mt-2"} size={"lg"}  icon={faEnvelope} /></Form.Label>
                <Form.Control className={"py-2 w-75"} type={"email"} placeholder={"Enter email"}/>
            </Form.Group>
            <Form.Group className={"d-flex flex-row align-content-center justify-content-center my-2 py-2"}
                        controlId={"formRegistrationPassword"}>
                <Form.Label className={"px-3"}>
                    <FontAwesomeIcon className={"text-light mt-2"} size={"lg"}  icon={faKey}/></Form.Label>
                <Form.Control className={"py-2 w-75"} type={"password"} placeholder={"Enter password"}/>
            </Form.Group>
            <Form.Group className={"d-flex flex-row align-content-center justify-content-center my-2 py-2"}
                        controlId={"formRegistrationPassword2"}>
                <Form.Label className={"px-3"}><
                    FontAwesomeIcon className={"text-light mt-2"} size={"lg"}  icon={faKey} /></Form.Label>
                <Form.Control className={"py-2 w-75"} type={"password"} placeholder={"Repeat your password"}/>
            </Form.Group>
            <SocialMediaLinks socials={socialMedias}/>
            <Container className={"d-flex justify-content-center align-content-center"}>
                <Button className={"w-100 btn btn-light"} type={"submit"}>
                    Sign Up
                </Button>
            </Container>
            <Container>
                <p className={"text-center py-3 text-light"}>Have already an account? <Link to={"/signin"} className={"fw-semibold"}>Log In Here</Link></p>
            </Container>
        </Form>
    )
}


// function SocialMediaLinks(){
//     return (
//         <Container className='text-center pt-3 mb-3 text-light' fluid>
//             <span className={"text-light"}>Sign in with </span>
//             <a className="pt-3 mx-2 text-light card-link" target="_blank" href=""><FontAwesomeIcon size="xl" icon={faGoogle}/></a>
//             <a className="pt-3 mx-2 text-light card-link" target="_blank" href=""><FontAwesomeIcon size="xl" icon={faFacebook}/></a>
//             <a className="pt-3 mx-2 text-light card-link" target="_blank" href=""><FontAwesomeIcon size="xl" icon={faLinkedin}/></a>
//         </Container>
//     )
// }
