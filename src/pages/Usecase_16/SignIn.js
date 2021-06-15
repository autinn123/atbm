import React from 'react'
import { Button,  Input, Label } from 'reactstrap'
import './SignIn.css'

export default function SignIn() {
    return (
                <div className="form-container">
                    <h1 className="text-center">SIGN IN</h1>
                        <Label for="email">Email</Label>
                        <Input className="mt-2" type="email" name="email" id="email" placeholder="Input your email" />
                        <Label for="password" className="mt-2">Password</Label>
                        <Input className="mt-2" type="password" name="password" id="password" placeholder="Input your password" />
                    <Button type="submit" className="mt-4" color="primary">SIGN IN</Button>
                </div>
    )
}
