import React from "react";
import {Card, Container} from "react-bootstrap";



export function EventCard({event}) {
    return(
        <Card className="my-3 p-3 rounded">
            <a href="/events/">
                <Card.Img style={{
                    "objectFit": "cover",
                    "borderRadius": 15,
                    "height": "30vh"
                }} src={event.img}/>
            </a>
            <Card.Body>
                <Card.Title className="text-primary" as="h5">
                    <strong>{event.title}</strong> <br/> <span className={"text-muted h6"}>Date: 03/04/23</span>
                </Card.Title>
                <Card.Text as="p" style={{textAlign: "justify"}}>
                    {event.body}
                </Card.Text>
                    <Card.Link>
                        <button className={"w-100 btn btn-lg btn-primary"}>Volunteer</button>
                    </Card.Link>
            </Card.Body>
        </Card>
    )
}