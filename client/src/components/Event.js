import React, { useEffect, useState } from 'react';
import './Event.css';
import axios from 'axios';
import EventImages from './EventImages';

const Event = ({match}) => {
    const [event, setEvent] = useState({});
    const getEvent = async () => {
        const { data } = await axios.get(`/events/${match.params.councilName}/${match.params.eventName}`);
        // console.log(data.data);
        setEvent(data.data[0])
        // console.log(event)
    }
    useEffect(() => {
        console.log(match.params.councilName,match.params.eventName)
        getEvent()
    },[])
    return (
        <div className="event-screen">
            <div className="bx">
                <div className="contentBx">
                    <div className="infoBx">
                        <h2>{match.params.eventName}</h2>
                        <p>{event.eventDescription}</p>
                        <div className="report">
                            <h5>What was the event about ?</h5>
                            <p>{event.eventReport}</p>
                        </div>
                    </div>
                    <EventImages councilName={match.params.councilName} eventName={match.params.eventName} />
                </div>
            </div>
        </div>
    )
}

export default Event
