import React, {useState, useEffect} from 'react';
import './Login.css';
import axios from 'axios';

const Login = ({history}) => {
    const [role, setrole] = useState("admin");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");

    const LoginHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }
        
        try {
            const user = {
                role: role,
                username: username,
                password: password
            }
            console.log(user)
            const {data} = await axios.post("http://localhost:5000/login", {role, username, password}, config);
            console.log(data)
            localStorage.setItem("council", data.councilName)
            localStorage.setItem("role", role);
            localStorage.setItem("authToken", data.token);
            console.log(localStorage)

            history.push("/")

        } catch (error) {
            console.log(error)
            setError(`Error: ${role} not found`)
            setTimeout(() => {
                setError("")
            }, 5000);
            setrole("admin");
            setpassword("");
            setusername("");
        }
    }

    useEffect(() => {
        if(localStorage.getItem("authToken")){
            history.push("/")
        }
    }, [history]);

    return (
        <div className="login-screen">
            <div className="contentBx">
                <div className="formBx">
                    <h2>Login</h2>
                    <p>{error}</p>
                    <form onSubmit={LoginHandler}>
                        <div className="inputBx">
                            <input type="radio" value="admin" name="role" className="admin" default onClick={(e) => {setrole(e.target.value)}} /> Admin
                            <input type="radio" value="member" name="role" className="member" onClick={(e) => {setrole(e.target.value)}} /> Member
                        </div>
                        <div className="inputBx">
                            <span>Username</span>
                            <input type="text" name="username" value={username} onChange={(e) => {setusername(e.target.value)}} />
                        </div>
                        <div className="inputBx">
                            <span>Password</span>
                            <input type="password" name="password" value={password} onChange={(e) => {setpassword(e.target.value)}} />
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="login" className="login-btn" />
                        </div>
                    </form>
                </div>
                </div>
            </div>
    )
}

export default Login
