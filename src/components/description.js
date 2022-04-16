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
            <div class="about">
                <h1>Who are the Users of the site?</h1>
                <p>The users of this website are miata owners that are looking to discuss and show their work. Specifcally miatas that are being turboed.</p>
            </div>
            <div class="about">
                <h1>What is it that you want your users to get out of using the site?</h1>
                <p>I want the users of this website to have the ability to communicate with others users in the car community to help with a problem they have and show off what they are working on/want to do.</p>
            </div>
            <div class="about">
                <h1>What problem are you trying to solve for the users of the site?</h1>
                <p>The problem I'm trying to solve is the problem of getting lost when putting a turbo in the miata. There are a lot of issues that can arise when putting a turbo in the miata and I want there to be a community that will help each other.</p>
            </div>
            <div class="about">
                <h1>What are the actions you want the users to take once they have used your site?</h1>
                <p>I want the users to have the ability to login and begin creating posts that other users can view. Hopefully those posts are informative and helpful to other users of the website.</p>
            </div>
        </div>    
    )
}
export default Description;