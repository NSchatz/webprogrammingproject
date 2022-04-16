import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
 
function Description () {
    return (
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
            <h1>Description:</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis debitis numquam alias quidem beatae quaerat in quo enim tempora voluptates! Illo repellendus reiciendis ad delectus inventore alias quasi deleniti labore nesciunt rem tempore autem voluptas et corporis quibusdam tenetur asperiores ullam, incidunt recusandae aliquam vel tempora! Amet incidunt sed placeat itaque tempora hic qui ipsa. Architecto enim, cupiditate vel, ab consequuntur dolorum eius officiis rem ad perspiciatis adipisci porro molestias sequi a reiciendis id? Eos placeat cum possimus. Consectetur velit laboriosam eum sed blanditiis assumenda quis animi ad mollitia eos vero repellendus, quas, earum debitis commodi? Alias quo laborum suscipit!</p>
        </div>    
    )
}
export default Description;