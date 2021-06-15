import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo">
                        PTTK-HTTT
                    </Link>
                    <ul className='nav-menu'>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Home
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/courses" className="nav-links">
                                Courses
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/marks" className="nav-links">
                                Marks
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/subjects" className="nav-links">
                                Subjects
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links">
                                Sign Up
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-in" className="nav-links">
                                LOG IN
                        </Link>
                        </li>

                    </ul>
                    
                </div>
            </nav>
        </>
    )
}
