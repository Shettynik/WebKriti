import React, {useState, useEffect} from 'react';
import './Login.css';
import axios from 'axios';

const Login = ({history}) => {
    const [role, setrole] = useState("");
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
            const {data} = await axios.post("http://localhost:5000/login", {role, username, password}, config);
            console.log(data)
            // localStorage.setItem("id", data.id);
            // localStorage.setItem("authToken", data.token);

            // history.push("/")

        } catch (error) {
            setError(`Error: ${error}`)
            setTimeout(() => {
                setError("")
            }, 5000);
        }

    // useEffect(() => {
    //     if(localStorage.getItem("authToken")){
    //         history.push("/")
    //     }
    // }, [history]);
    }
    return (
        <div className="login-screen">
            <div className="contentBx">
                <div className="formBx">
                    <h2>Login</h2>
                    <p>{error}</p>
                    <form onSubmit={LoginHandler}>
                        <div className="inputBx">
                            <input type="radio" value="admin" name="role" className="admin" onChange={(e) => {setrole(e.target.value)}} /> Admin
                            <input type="radio" value="member" name="role" className="member" onChange={(e) => {setrole(e.target.value)}} /> Member
                        </div>
                        <div className="inputBx">
                            <span>Username</span>
                            <input type="text" name="username" onChange={(e) => {setusername(e.target.value)}} />
                        </div>
                        <div className="inputBx">
                            <span>Password</span>
                            <input type="password" name="password" onChange={(e) => {setpassword(e.target.value)}} />
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
