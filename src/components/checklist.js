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
            </div>
            <div>
                <h1>Ajax usage:</h1>
                <p>Ajax is being used with the login/sign up</p>
            </div>
            <div>
                
            </div>
            <h1>Theme:</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam, distinctio, aspernatur soluta sunt dolore numquam dicta odio tempora eius excepturi optio omnis reiciendis ullam ex illo quibusdam enim harum recusandae maiores eum! Ratione, eaque similique voluptatem numquam doloremque cupiditate ab ipsam deleniti debitis error libero et vel inventore distinctio.</p>
            <h1>New Library Usage:</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam, distinctio, aspernatur soluta sunt dolore numquam dicta odio tempora eius excepturi optio omnis reiciendis ullam ex illo quibusdam enim harum recusandae maiores eum! Ratione, eaque similique voluptatem numquam doloremque cupiditate ab ipsam deleniti debitis error libero et vel inventore distinctio.</p>
            <h1>Javascrih1t Usage:</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam, distinctio, aspernatur soluta sunt dolore numquam dicta odio tempora eius excepturi optio omnis reiciendis ullam ex illo quibusdam enim harum recusandae maiores eum! Ratione, eaque similique voluptatem numquam doloremque cupiditate ab ipsam deleniti debitis error libero et vel inventore distinctio.</p>
            <h1>Membershih1 Area:</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam, distinctio, aspernatur soluta sunt dolore numquam dicta odio tempora eius excepturi optio omnis reiciendis ullam ex illo quibusdam enim harum recusandae maiores eum! Ratione, eaque similique voluptatem numquam doloremque cupiditate ab ipsam deleniti debitis error libero et vel inventore distinctio.</p>
            <h1>General User:</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam, distinctio, aspernatur soluta sunt dolore numquam dicta odio tempora eius excepturi optio omnis reiciendis ullam ex illo quibusdam enim harum recusandae maiores eum! Ratione, eaque similique voluptatem numquam doloremque cupiditate ab ipsam deleniti debitis error libero et vel inventore distinctio.</p>
        </div>
        
    </div>
 )
}
 
export default CheckList;