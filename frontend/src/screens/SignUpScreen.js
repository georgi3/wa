import React from "react";
import {Link} from "react-router-dom";
import {Container, Col, Form, Row, Button} from "react-bootstrap";
import {faGoogle, faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faUser, faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import signupImg from "../assets/images/signup1.webp"

export default function SignUpScreen(){
    return (
        <Container className={"d-flex flex-row flex-wrap bg-danger p-0"} fluid>
            <Col  className={"bg-primary container-fluid p-0"} fluid>
                <img className={"img-fluid"}
                     style={{
                         "-webkit-filter": "grayscale(100%)",
                         "filter": "grayscale(100%)"
                     }}
                     src={signupImg}
                     alt="WelfareAvenue Image"/>
            </Col>
            <Col  className={"bg-secondary container-fluid px-0 py-5"} fluid>
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
            <SocialMediaLinks/>
            <Container className={"d-flex justify-content-center align-content-center"}>
                <Button className={"w-75 btn btn-primary"} type={"submit"}>
                    Sign Up
                </Button>
            </Container>
            <Container>
                <p className={"text-center py-3 text-light"}>Have already an account? <Link to={"/signin"} className={"fw-semibold"}>Log In Here</Link></p>
            </Container>
        </Form>
    )
}


function SocialMediaLinks(){
    return (
        <Container className='text-center pt-3 mb-3 text-light' fluid>
            <span className={"text-light"}>Sign in with </span>
            <a className="pt-3 mx-2 text-light card-link" target="_blank" href=""><FontAwesomeIcon size="xl" icon={faGoogle}/></a>
            <a className="pt-3 mx-2 text-light card-link" target="_blank" href=""><FontAwesomeIcon size="xl" icon={faFacebook}/></a>
            <a className="pt-3 mx-2 text-light card-link" target="_blank" href=""><FontAwesomeIcon size="xl" icon={faLinkedin}/></a>
        </Container>
    )
}

// <>
//             <Container style={{
//             "backgroundImage": `url(${signupImg})`,
//             "backgroundPosition": "center",
//             // "backgroundRepeat": "no-repeat",
//             "backgroundSize": "cover",
//             "width": "100%",
//             "height": "90vh",
//             "-webkit-filter": "grayscale(100%)",
//             "filter": "grayscale(100%)"
//         }} fluid> </Container>
//             <Container className={"h-100 d-flex flex-column justify-content-end align-content-end"}>
//                 <Form>
//                     <Container className={"text-center"}>
//                         <h1 className={"text-primary"}>Join our Community!</h1>
//                     </Container>
//                     <Form.Group className={"d-flex flex-row my-2 py-2"}
//                                 controlId={"formRegistrationFName"}>
//                         <Form.Label className={"px-3"}>
//                             <FontAwesomeIcon className={"mt-2"} size={"lg"}  icon={faUser}/></Form.Label>
//                         <Form.Control type={"text"} placeholder={"Enter your first name"}/>
//                     </Form.Group>
//                     <Form.Group className={"d-flex flex-row my-2 py-2"}
//                                 controlId={"formRegistrationLName"}>
//                         <Form.Label className={"px-3"}>
//                             <FontAwesomeIcon className={"mt-2"} size={"lg"}  icon={faUser}/></Form.Label>
//                         <Form.Control type={"text"} placeholder={"Enter your last name"}/>
//                     </Form.Group>
//                     <Form.Group className={"d-flex flex-row my-2 py-2"}
//                                 controlId={"formRegistrationEmail"}>
//                         <Form.Label className={"px-3"}>
//                             <FontAwesomeIcon className={"mt-2"} size={"lg"}  icon={faEnvelope} /></Form.Label>
//                         <Form.Control type={"email"} placeholder={"Enter email"}/>
//                     </Form.Group>
//                     <Form.Group className={"d-flex flex-row my-2 py-2"}
//                                 controlId={"formRegistrationPassword"}>
//                         <Form.Label className={"px-3"}>
//                             <FontAwesomeIcon className={"mt-2"} size={"lg"}  icon={faKey}/></Form.Label>
//                         <Form.Control type={"password"} placeholder={"Enter password"}/>
//                     </Form.Group>
//                     <Form.Group className={"d-flex flex-row my-2 py-2"}
//                                 controlId={"formRegistrationPassword2"}>
//                         <Form.Label className={"px-3"}><
//                             FontAwesomeIcon className={"mt-2"} size={"lg"}  icon={faKey} /></Form.Label>
//                         <Form.Control type={"password"} placeholder={"Repeat your password"}/>
//                     </Form.Group>
//                     <Container className={"d-flex justify-content-center align-content-center"}>
//                         <Button className={"w-75"} type={"submit"}>
//                             Sign Up
//                         </Button>
//                     </Container>
//                 </Form>
//             </Container>
//         {/*// </Container>*/}
// </>