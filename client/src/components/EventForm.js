import React from 'react';
import './EventForm.css';

const EventForm = () => {
    return (
        <div className="create-screen">
            <div className="contentBx">
                <div className="formBx">
                    <h2>Create Event</h2>
                    <p>Error has occurred</p>
                    <form>
                        <div className="inputBx">
                            <span>Title</span>
                            <input type="text" name="title" />
                        </div>
                        <div className="inputBx">
                            <span>Description</span>
                            <input type="text" name="title" />
                        </div>
                        <div className="inputBx">
                            <span>Report</span>
                            <textarea type="text" name="report" rows="3"/>
                        </div>
                        <div className="inputBx">
                            <span>Upload Images</span>
                            <textarea type="file" name="images" multiple/>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Create" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EventForm
