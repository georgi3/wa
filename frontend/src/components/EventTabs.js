import React from "react";
import {Card, Col, Row, Tab, Tabs} from 'react-bootstrap';
import {EventCard} from "./EventCard";
import {EventsCarousel} from "./EventsCarousel";

// should be receiving event objects, filter based on date and distribute either to past/upcoming tab
export function EventTabs({events}) {
    const pastEvents = events.filter(event => event.past === true);
    const upcomingEvents = events.filter(event => event.past === false);
    return (
        <Tabs
            defaultActiveKey="upcomingEvents"
            id="eventTabs"
            className="mb-3"
            justify>
            <Tab eventKey="upcomingEvents" title="Upcoming Events">
                <EventsCarousel events={upcomingEvents}/>
            </Tab>
            <Tab eventKey="pastEvents" title="Past Events">
                <EventsCarousel events={pastEvents} onClick={() => events.filter(event => event.past === true)}/>
            </Tab>
        </Tabs>
    );
}
