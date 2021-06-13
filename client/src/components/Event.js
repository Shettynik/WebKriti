import React, { useEffect, useState } from 'react';
import './Event.css';
import axios from 'axios';
import EventImages from './EventImages';
import { Button } from 'react-bootstrap';

const Event = ({ match, history }) => {
    const [event, setEvent] = useState({});
    const getEvent = async () => {
        const { data } = await axios.get(`/events/${match.params.councilName}/${match.params.eventName}`);
        console.log(data);
        setEvent(data.data[0])
        console.log(event)
    }
    const deleteEvent = async () => {
        var tenure = prompt(`Type DELETE${match.params.eventName} to delete`);
        console.log(tenure)
        if (tenure === `DELETE${match.params.eventName}`) {
            const {data} = await axios.delete(`/deleteEvent/${match.params.councilName}/${match.params.eventName}`);
            console.log(data.data)
            alert(data.data);
            history.push("/")
        }
        else {
            alert("Event could not be deleted")
        }
    }
    useEffect(() => {
        console.log(match.params.councilName, match.params.eventName)
        getEvent()
    }, [])
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
                    {/* <Button onClick={ }>Update</Button> */}
                    <div>
                        <Button onClick={deleteEvent}>Delete</Button>
                    </div>
                    <div>
                        <Button>Update</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event
