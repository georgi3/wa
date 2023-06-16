import React from "react";
import {Carousel} from "react-bootstrap";

export function UncontrolledCarousel({backgrounds}){
    return (
        <Carousel>
            {backgrounds.map(background => (
                <Carousel.Item key={background.url}>
                    <div style={{
                        "backgroundImage": `url(${background.img})`,
                        "backgroundPosition": "center",
                        "backgroundRepeat": "no-repeat",
                        "backgroundSize": "cover",
                        "width": "100%",
                        "height": "91vh",
                    }}> </div>
                    <Carousel.Caption>
                        <h1 className="text-light">{background.title}</h1>
                        <p>{background.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
        )
}
