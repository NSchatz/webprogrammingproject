import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
function Home (){
    return (
        <div>
        <Navbar bg="primary" variant="dark">
              <div className="App-header">
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/checklist">Contact Us</Link>
                  <Link to="/description">Contact Us</Link>
                  <Link to="/login">Login</Link>
              </div>
              
            </Navbar>
        <h1>Welcome to the world of Geeks!</h1>
        </div>
    )
}
 
export default Home;