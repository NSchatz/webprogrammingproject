import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
 
function About () {
    return(
        <div>
            <div>
                <Navbar bg="primary" variant="dark">
                    <div className="App-header">
                        <Link to="/">Home</Link>
                        <Link to="/checklist">Checklist</Link>
                        <Link to="/about">About</Link>
                        <Link to="/description">Description</Link>
                        <Link to="/posts">Posts</Link>
                        <h1 class="brand">TurboMiata</h1>
                        <a class='login' href="/login">Login</a>
                    </div> 
                </Navbar>
            </div>
        </div>
    )
}
export default About;