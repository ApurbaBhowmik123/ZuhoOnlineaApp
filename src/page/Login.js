import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/loginsignup.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "post",
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const responseData = await response.json();
            if (response.ok) { // Check if response is OK
                alert("Login Successful");
                sessionStorage.setItem('userData', JSON.stringify(responseData));

                navigate('/')
                // Redirect to home page
            } else {
                console.error(responseData.message);
            }
            sessionStorage.setItem('key', 'value');

        } catch (error) {
            console.error("API Not Integrated", error);
        }
    };

    return (
        <div className="login">
            <div className="login-div">
                <div className="login-heading">
                    <span>Welcome To Login Page</span>
                </div>
                <div className="login-form">
                    <input type="text" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
