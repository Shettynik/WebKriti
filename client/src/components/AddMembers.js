import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AddMemberForm = ({match, history}) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const AddMemberHandler = async (e) => {
        e.preventDefault()
        
        setMessage("Loading...");
        try {
            const {data} = await axios.post(`http://localhost:5000/addMember/${match.params.councilName}`,{name, username, password});
            setMessage("");
            setSuccess("Member added successfully!!");
            setTimeout(() => {
                setSuccess("")
            }, 5000);
            setName("");
            setUsername("");
            setPassword("");
        } catch (error) {
            setMessage("");
            setError(`Error: member could not be created. Please try again`)
            setTimeout(() => {
                setError("")
            }, 5000);
        }

        console.log(error)
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
                    <h2>Add Member</h2>
                    <p>{message}</p>
                    <p>{success ? success : error}</p>
                    <form onSubmit={AddMemberHandler}>
                        <div className="inputBx">
                            <span className="name">Name</span>
                            <input type="text" name="title" value={name} required autoComplete="off" onChange = {(e) => {setName(e.target.value)}} />
                        </div>
                        <div className="inputBx">
                            <span className="username">Username</span>
                            <input type="text" name="username" value={username} required autoComplete="off" onChange={(e) => {setUsername(e.target.value)}} />
                        </div>
                        <div className="inputBx">
                            <span className="password">Password</span>
                            <input type="text" name="password" value={password} required autoComplete="off" onChange={(e) => {setPassword(e.target.value)}} />
                        </div>
                        <div className="btnBx">
                            <input type="submit" value="Add Member" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddMemberForm;
