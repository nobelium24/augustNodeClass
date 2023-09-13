import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const details = {
        email,
        password,
    }
    const url = "http://localhost:7770/users/login"
    const signUp = () => {
        console.log(details);
        axios.post(url, details).then((response) => {
            console.log(response)
            alert(response.data.message)
        }).catch((error) => {
            console.log(error);
            alert(error.response.data.message);
        })
    }
    return (
        <>
            <div className='mx-auto container shadow-lg card p-5'>
                <h6 className='display-6 text-muted text-center'>Log In</h6>
                <input type="text" className="form-control my-2" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="form-control my-2" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <div>
                    <button className='btn btn-dark' onClick={signUp}>Sign up</button>
                </div>
            </div>
        </>
    )
}

export default Login
