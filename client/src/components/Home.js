import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Bottom from './Bottom';
import './Home.css';
import Header from './Header';

const Home = () => {
    return (
        <>
            <Header />
            <div className="card-contents">
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

export default Home;
