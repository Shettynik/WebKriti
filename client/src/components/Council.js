import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Bottom from './Bottom';
import './Council.css';
import Home from './Home';

const Events = () => {
    return (
        <>
            <Home />
            <div className="card-contents">
                <div className="card-item">
                    <Card>
                        <Card.Img variant="top" style={{ height: '180px' }} src="https://category-image-upload.s3.amazonaws.com/nikshita/events.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">View More</Button>
                        </Card.Body>
                    </Card>
                    
                </div>
                <div className="card-item">
                    <Card>
                        <Card.Img variant="top" style={{ height: '180px' }} src="https://category-image-upload.s3.amazonaws.com/nikshita/events.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">View More</Button>
                        </Card.Body>
                    </Card>
                    
                </div>
                <div className="card-item">
                    <Card>
                        <Card.Img variant="top" style={{ height: '180px' }} src="https://category-image-upload.s3.amazonaws.com/nikshita/events.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Card-Description
                            </Card.Text>
                            <Button variant="primary">View More</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Bottom />
        </>
    )
}

export default Events
