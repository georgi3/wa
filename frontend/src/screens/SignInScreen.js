import React from "react";
import {Link} from "react-router-dom";
import {Container, Col, Form, Row, Button} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faKey, faUser} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGoogle, faLinkedin} from "@fortawesome/free-brands-svg-icons";
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

export default function SignInScreen(){
    return (
        <Container className={"waves-bg-secondary d-flex justify-content-center align-content-center vh-100 vw-100"} fluid>
            <SignInForm/>
        </Container>
    )
}

function SignInForm(){
    return (
        <Form className={"p-1"}>
            <Container className={"my-3 py-5 text-center"}>
                <h1 className={"text-light fw-light"}>Sign in to WelfareAvenue</h1>
            </Container>
            <Form.Group className={"d-flex flex-row align-content-center justify-content-center my-2 py-2"}
                        controlId={"formSignInEmail"}>
                <Form.Label className={"px-3"}>
                    <FontAwesomeIcon className={"text-light mt-2"} size={"lg"}  icon={faEnvelope} /></Form.Label>
                <Form.Control className={"py-2 w-100"} type={"email"} placeholder={"Enter email"}/>
            </Form.Group>
            <Form.Group className={"d-flex flex-row align-content-center justify-content-center my-2 py-2"}
                        controlId={"formSignInPassword"}>
                <Form.Label className={"px-3"}>
                    <FontAwesomeIcon className={"text-light mt-2"} size={"lg"}  icon={faKey}/></Form.Label>
                <Form.Control className={"py-2 w-100"} type={"password"} placeholder={"Enter password"}/>
            </Form.Group>
            <Container className={"d-flex justify-content-center text-center"}>
                <Container className={"d-flex justify-content-evenly"}>
                    {/*<span className={"text-light"}>Sign in with </span>*/}
                    <SocialMediaLinks socials={socialMedias}/>
                </Container>
            </Container>
            <Container className={"d-flex justify-content-center align-content-center"}>
                <Button className={"w-75 btn btn-light"} type={"submit"}>
                    Sign Up
                </Button>
            </Container>
            <Container>
                <p className={"text-center py-3 text-light"}><Link to={"/signin"} className={"fw-semibold text-light"}>Forgot password?</Link></p>
            </Container>
        </Form>
    )
}

// function SocialMediaLinks(){
//     return (
//         <Container className='text-center pt-3 mb-3 text-light' fluid>
//             <span className={"text-light"}>Sign in with </span>
//             <a className="pt-3 mx-2 text-danger card-link" target="_blank" href=""><FontAwesomeIcon size="xl" icon={faGoogle}/></a>
//             <a className="pt-3 mx-2 text-info card-link" target="_blank" href=""><FontAwesomeIcon size="xl" icon={faFacebook}/></a>
//             <a className="pt-3 mx-2 text-info card-link" target="_blank" href=""><FontAwesomeIcon size="xl" icon={faLinkedin}/></a>
//         </Container>
//     )
// }