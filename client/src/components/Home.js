import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Bottom from './Bottom';
import './Home.css';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [councils, setCouncils] = useState([]);
    const getCouncils = async () => {
        const { data } = await axios.get("/councils");
        setCouncils(data.data)
    }
    useEffect(() => {
        getCouncils()
    },[]);
    return (
        <>
            <Header />
            <div className="card-contents">
                {councils && councils.map((council) => {
                    return <div className="card-item">
                        <Card>
                            <Card.Img variant="top" style={{ height: '180px' }} src={council.councilImg} />
                            <Card.Body>
                                <Card.Title>{council.councilName}</Card.Title>
                                <Card.Text>
                                    {council.description}
                                </Card.Text>
                                <Button variant="primary"><Link to={"/"+council.councilName}>View More</Link></Button>
                            </Card.Body>
                        </Card>
                    </div>
                })}
            </div>
            <Bottom />
        </>
    )
}

export default Home;
