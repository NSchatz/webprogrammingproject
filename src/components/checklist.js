import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
 
function CheckList (){
 return (
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
        <div class="boxes">
            <div class="about">
                <h1>Database Usage:</h1>
                <p>An postgresql database is being used that I had setup with heroku.</p>
                <p>Pages: Login page, Posts page </p>
            </div>
            <div class="about">
                <h1>Ajax usage:</h1>
                <p>Ajax is being used to create a user and to create posts.</p>
                <p>Pages: Signup page, Create Posts page</p>
            </div>
            <div class="about">
                <h1>New Library Usage:</h1>
                <p>A new library is being used for the image gallery located on the main page</p>
                <p>Page: Homepage(react-imge-gallery)</p>
            </div>
            <div class="about">
                <h1>Javascript Usage:</h1>
                <p>Javascript is used on the posts page to pull the data from the backend and show the json data that is retrieved.</p>
            </div>
            <div class="about">
                <h1>Membership Area:</h1>
                <p>The membership area can be accessed by the login button and logging in. The post creation is showed and allows users to create a post on the website.</p>
            </div>
        </div>
        
    </div>
 )
}
 
export default CheckList;