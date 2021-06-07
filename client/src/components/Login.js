import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-screen">
            <div className="contentBx">
                <div className="formBx">
                    <h2>Login</h2>
                    <p>Error has occurred</p>
                    <form>
                        <div className="inputBx">
                            <input type="radio" value="admin" name="role" className="admin" /> Admin
                            <input type="radio" value="member" name="role" className="member" /> Member
                        </div>
                        <div className="inputBx">
                            <span>Username</span>
                            <input type="text" name="username" />
                        </div>
                        <div className="inputBx">
                            <span>Password</span>
                            <input type="password" name="password" />
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
