import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import Navbar from './Navbar/Navbar';
import './Login.css';

//token simply is user data
async function loginUser(credentials){
    return fetch('https://localhost:44351/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login({setToken}){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username: username,
            password: password
        });
        setToken(token);
    }

    return(
        <div className="login-wrapper">
            {/* <Navbar /> */}
            <h1>Please log in</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password"  onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};