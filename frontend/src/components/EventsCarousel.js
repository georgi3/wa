import React from "react";
import {EventCard} from "./EventCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export function EventsCarousel({events}) {
    return (
        <Carousel
            responsive={responsive}
        >
            {
                events.map(event => {
                    return (
                        <EventCard className='p-3 mx-3 d-flex' key={event.id} event={event} />
                    )
                })
            }
        </Carousel>
    );
}
