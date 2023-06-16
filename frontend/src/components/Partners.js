import React from "react";
import {Container, Col, Row, Card} from "react-bootstrap";


export function Partners({partner}) {
    return(
        <Card className="my-3 p-3 bg-secondary border-0">
            <a href={partner.url} target="_blank">
                <Card.Img src={partner.img}
                          alt={partner.name}
                          style={{ height: 180, width: 180, "margin": "0 0 0 20%"}}
                          className="position-relative"
                />
            </a>
        </Card>
    )
}