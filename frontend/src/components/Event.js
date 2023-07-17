import React from "react";
import {Container, Col, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Event({event}){
    return(
        <>
            {/*<Card className="my-3 p-3 rounded">*/}
            {/*    <Link to={`/product/${event._id}`}>*/}
            {/*        <Card.Img src={event.image} />*/}
            {/*    </Link>*/}
            {/**/}
            {/*    <Card.Body>*/}
            {/*        <Link to={`/product/${event._id}`}>*/}
            {/*            <Card.Title as="div">*/}
            {/*                <strong>{event.name}</strong>*/}
            {/*            </Card.Title>*/}
            {/*        </Link>*/}
            {/**/}
            {/*        <Card.Text as="div">*/}
            {/*            <div className="my-3">*/}
            {/*                <Rating value={event.rating} text={`${event.numReviews} reviews`} color={'#f8e825'} />*/}
            {/*            </div>*/}
            {/*        </Card.Text>*/}
            {/**/}
            {/**/}
            {/*        <Card.Text as="h3">*/}
            {/*            ${event.price}*/}
            {/*        </Card.Text>*/}
            {/*    </Card.Body>*/}
            {/*</Card>*/}
        {/**/}
        </>
    )
}