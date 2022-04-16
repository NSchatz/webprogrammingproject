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
            <div>
                <h1>Database Usage:</h1>
                <p>An postgresql database is being used that I had setup with heroku.</p>
                <p>Pages: Login page, Posts page </p>
            </div>
            <div>
                <h1>Ajax usage:</h1>
                <p>Ajax is being used to create a user and to create posts.</p>
                <p>Pages: Signup page, Create Posts page</p>
            </div>
            <div>
                <h1>New Library Usage:</h1>
                <p>A new library is being used for the image gallery located on the main page</p>
                <p>Page: Homepage(react-imge-gallery)</p>
            </div>
            <div>
                <h1>Javascript Usage:</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam, distinctio, aspernatur soluta sunt dolore numquam dicta odio tempora eius excepturi optio omnis reiciendis ullam ex illo quibusdam enim harum recusandae maiores eum! Ratione, eaque similique voluptatem numquam doloremque cupiditate ab ipsam deleniti debitis error libero et vel inventore distinctio.</p>
            </div>
            <div>
                <h1>Membership Area:</h1>
                <p>The membership area can be accessed by the login button and logging in. The post creation is showed and allows users to create a post on the website.</p>
            </div>
        </div>
        
    </div>
 )
}
 
export default CheckList;