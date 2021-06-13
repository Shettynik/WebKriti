import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Council.css';
import Admins from './Admins';
import EventName from './EventName';
import Header from './Header';

const Council = ({match}) => {
    const [council, setCouncil] = useState({});
    const getCouncilInfo = async (councilName) => {
        const {data} = await axios.get(`/councils/${councilName}`); 
        console.log(data.data[0])
        setCouncil(data.data[0]);
    }
    useEffect(() => {
        console.log(match.params.councilName);
        getCouncilInfo(match.params.councilName)
    },[])
    return (
        <div className="council-screen">
            <div className="bx">
                <div className="contentBx">
                    <img src={council.councilImg} alt="council-img" />
                    <div className="infoBx">
                        <h2>{council.councilName}</h2>
                        <p>{council.description}</p>
                        <h5>Admins</h5>
                        {/* Admin component */}
                        <Admins councilName={council.councilName} />
                    </div>
                </div>
                {/* EVENT component */}
                <EventName councilName={council.councilName} />
            </div>
        </div>
    )
}

export default Council
