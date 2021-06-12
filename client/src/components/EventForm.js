import React, { useEffect, useState } from 'react';
import './EventForm.css';

const EventForm = ({match, history}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [report, setReport] = useState("");
    useEffect(() => {
        // localStorage.setItem("authToken","")
        // if (!localStorage.getItem("authToken")) {
        //     history.push("/login");
        // }
    })
    return (
        <div className="create-screen">
            <div className="contentBx">
                <div className="formBx">
                    <h2>Create Event</h2>
                    <p>Error has occurred</p>
                    <form>
                        <div className="inputBx">
                            <span className="title">Title</span>
                            <input type="text" name="title" required/>
                        </div>
                        <div className="inputBx">
                            <span className="description">Description</span>
                            <input type="text" name="title" required/>
                        </div>
                        <div className="inputBx">
                            <span className="report">Report</span>
                            <textarea type="text" name="report" rows="3"/>
                        </div>
                        <div className="inputBx">
                            <span className="upload">Upload Images</span>
                            <input type="file" name="images" multiple/>
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
