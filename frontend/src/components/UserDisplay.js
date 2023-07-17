import React from "react";
import {Container, Col} from "react-bootstrap";
import unknownUser from "../assets/images/svg/unknown_user_icon.svg"
import {useState} from "react";
import {Link} from "react-router-dom";

// users.userName would be displaying userId or none, based ternary expression should either pull from db
// users = [userName, fullName] should not carry any other info
export default function UserDisplay({ users, areVolunteers}){

    return(
        <Container className={"d-flex flex-row flex-wrap my-5"}>
            {
                users.map(member => {
                    const handleLink = () => {
                        window.scrollTo(0, 0);
                    };
                    return(
                        (member.userName === null)
                            ?
                            (
                                <Col xxl={2} xl={3} lg={3} md={4} sm={6}
                                    className={"align-content-center justify-content-center text-center"}
                                    key={member.url}>
                                    <Container>
                                        <img src={unknownUser} width={"100%"} className={""} alt="Unknown User"/>
                                        <h4 className={"lead fs-4"}>{member.name}</h4>
                                    </Container>
                                    <AreVolunteersDisplay areVolunteers={areVolunteers} member={member}/>
                                </Col>
                            )
                            : (
                                <Col xxl={2} xl={3} lg={3} md={4} sm={6}
                                    className={"align-content-center justify-content-center text-center"}
                                    key={member.url}>
                                    <Link onClick={handleLink} to={"/user-profile"} className={" text-decoration-none"}>
                                        <Container className={"zoom"}>
                                            <img src={member.img} width={"100%"} className={"rounded-circle"} alt="User's Name"/>
                                        </Container>
                                        <h4 className={"lead fs-4"}>{member.name}</h4>
                                    </Link>
                                    <AreVolunteersDisplay areVolunteers={areVolunteers} member={member}/>
                                </Col>
                            )
                    )
                })
            }
        </Container>
    )
}

function AreVolunteersDisplay({member, areVolunteers}){
    return(
        <div>
            {
                (areVolunteers)
                    ?
                    (
                        <div>
                            <p className={" lead"}>{member.position}</p>
                            {
                                (member.testimonial)
                                    ? <p className={""}>"{member.testimonial}"</p>
                                    : <p className={""}></p>
                            }
                        </div>
                    )
                    :
                    (
                        <p className={""}>{member.position}</p>
                    )
            }
        </div>
    )
}