import React from 'react';
import './Council.css';

const Council = () => {
    return (
        <div className="council-screen">
            <div className="bx">
                <div className="contentBx">
                    <img src="https://category-image-upload.s3.amazonaws.com/nikshita/events.jpg" alt="council-img" />
                    <div className="infoBx">
                        <h2>Title</h2>
                        <p>Description</p>
                        <h5>Admins</h5>
                        <div className="adminBx">
                            <div><img src="https://category-image-upload.s3.amazonaws.com/nikshita/nikshita2021-06-06T16229551791601714006178.jpg" alt="" /><p>Nikshita Shetty</p></div>
                            {/* <div><img src="https://category-image-upload.s3.amazonaws.com/nikshita/nikshita2021-06-06T16229551791601714006178.jpg" alt="" /><p>Nikshita Shetty</p></div> */}
                        </div>
                    </div>
                </div>
                <div className="eventsBx">
                    <h4>Events conducted</h4>
                    <ul>
                        <li>first event</li>
                        <li>second event</li>
                        <li>third event</li>
                    </ul>
                    {/* if no events */}
                    <h3>No events yet</h3>
                </div>
            </div>
        </div>
    )
}

export default Council
