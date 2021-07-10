import React, {useState} from 'react'
import { Button,  Input, Label } from 'reactstrap'
import './index.css'

const SignIn = ({setToken}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    async function loginUser(credentials){
        return fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
    }

    const onHandleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username: username,
            password: password
        });
        setToken(token);
    }

    return (
        <div className="form-container">
            <form onSubmit={onHandleSubmit}>
                <h1 className="text-center">SIGN IN</h1>
                    <Label for="email">Email</Label>
                    <Input
                        className="mt-2"
                        // type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Input your email"
                        onChange={e => setUserName(e.target.value)}
                    />

                    <Label for="password" className="mt-2">Password</Label>
                    <Input 
                        className="mt-2" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Input your password"
                        onChange={e => setPassword(e.target.value)}
                    />
                <Button type="submit" className="mt-4" color="primary">SIGN IN</Button>
            </form>
        </div>
    )
}

export default SignIn;