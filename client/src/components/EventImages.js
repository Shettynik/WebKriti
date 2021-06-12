import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Carousel} from 'react-bootstrap';

const EventImages = ({councilName, eventName}) => {
    const [images, setImages] = useState([]);
    const getEventImages = async() => {
        const {data} = await axios.get(`/eventImages/${councilName}/${eventName}`);
        console.log(data.data[0])
        setImages(data.data)
    }
    useEffect(() => {
        getEventImages()
    },[])
    return (
        <div className="carousal">
            <Carousel>
                {images && images.map((image) => {
                    return (
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={image.image}
                            alt="First slide"
                        />
                    </Carousel.Item>)
                })}
            </Carousel>
        </div>
    )
}

export default EventImages
