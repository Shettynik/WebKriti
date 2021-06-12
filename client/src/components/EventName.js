import React, { useEffect, useState} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const EventName = (props) => {
    const [events, setEvents] = useState([])
    const getEvents = async () => {
        const { data } = await axios.get(`/councilEvents/${props.councilName}`);
        console.log(data.data)
        setEvents(data.data)
    }
    useEffect(() => {
        getEvents()
    })

    return (
        <div className="eventsBx">
            <h4>Events conducted</h4>
            <ul>
            {events && events.map((event) => {
                return <li><Link to={"/"+props.councilName+"/"+event.eventName}>{event.eventName}</Link></li>
            })}
            </ul>
            <Button><Link to={"/createEvent/"+props.councilName}>Create Event</Link></Button>
        </div>
    )
}

export default EventName
