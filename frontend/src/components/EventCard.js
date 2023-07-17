import React, {useState} from "react";
import {Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";



export function EventCard({event}) {
    // const [eventList, setEventList] = useState([]);
    const handleLink = () => {
        window.scrollTo(0, 0);
    };
    return(
        <Card className="my-3 p-3 mx-1" style={{background: "none", borderColor: "#6BBF59FF"}}>
            <Link to={`/events/${event.id}`}>
                <Card.Img style={{
                    "objectFit": "cover",
                    "borderRadius": 15,
                    "height": "30vh"
                }} src={event.img}/>
            </Link>
            <Card.Body>
                <Card.Title className="" as="h5">
                    <strong>{event.title}</strong> <br/> <span className={"fs-6"}>Date: 03/04/23</span>
                </Card.Title>
                <Card.Text as="p" className={""} style={{textAlign: "justify"}}>
                    {event.body}
                </Card.Text>
                    <Link onClick={handleLink} to={`/activity/${event.id}`}>
                        <button className={"w-100 btn btn-lg btn-outline-info"}>Volunteer</button>
                    </Link>
            </Card.Body>
        </Card>
    )
}