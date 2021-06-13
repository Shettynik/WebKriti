import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './EventForm.css';

const EventForm = ({match, history}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [report, setReport] = useState("");
    const [file, setFile] = useState({});
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const eventHandler = async (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append('image', file);
        
        setMessage("Loading...");
        try {
            const response = await axios.post(`http://localhost:5000/createEvent/?councilName=${match.params.councilName}&title=${title}&description=${description}&report=${report}`, data);
            setMessage("");
            setSuccess("Event created successfully!!");
            setTimeout(() => {
                setSuccess("")
            }, 5000);
            setReport("");
            setTitle("");
            setDescription("");
        } catch (error) {
            setMessage("");
            setError(`Error: event could not be created. Please try again`)
            setTimeout(() => {
                setError("")
            }, 5000);
        }

        console.log(error)
            setError(`Error: event could not be created. Please try again`)
            setTimeout(() => {
                setError("")
            }, 5000);
            setReport("");
            setTitle("");
            setDescription("");
    }
    useEffect(() => {
        // localStorage.setItem("authToken","")
        if (!localStorage.getItem("authToken")) {
            history.push("/login");
        }
    })
    return (
        <div className="create-screen">
            <div className="contentBx">
                <div className="formBx">
                    <h2>Create Event</h2>
                    <p>{message}</p>
                    <p>{success ? success : error}</p>
                    <form onSubmit={eventHandler}>
                        <div className="inputBx">
                            <span className="title">Title</span>
                            <input type="text" name="title" value={title} required autoComplete="off" onChange = {(e) => {setTitle(e.target.value)}} />
                        </div>
                        <div className="inputBx">
                            <span className="description">Description</span>
                            <input type="text" name="description" value={description} required autoComplete="off" onChange={(e) => {setDescription(e.target.value)}} />
                        </div>
                        <div className="inputBx">
                            <span className="report">Report</span>
                            <textarea type="text" name="report" rows="3" value={report} required autoComplete="off" onChange={(e) => {setReport(e.target.value)}} />
                        </div>
                        <div className="inputBx">
                            <span className="upload">Upload Images</span>
                            <input type="file" name="image" onChange={(e) => {setFile(e.target.files[0])}}/>
                        </div>
                        <div className="btnBx">
                            <input type="submit" value="Create" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EventForm
