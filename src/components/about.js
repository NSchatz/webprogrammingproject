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
            <div>
            <div>
                <h1>Who am I?</h1>
                <p>My name is Noah Schatz. I am a computer science major graduating with a bachelors degree this semester. I love cars and I am currently working on a 1990 miata. I am putting a turbo on the 1.6 liter engine.</p>
            </div>
            <div>
                <h1>Project Description</h1>
                <p>I created this project with the goal of creating an area for miata owners that plan on turboing their miata and want a place to be able to discuss what it is they are working on.</p>
            </div>
            <div>
                <h1>Technology Used</h1>
                <p>This website is using python, flask, and react/node.js. Flask is the backend of the website and react is the frontend.</p>
            </div>
            <div>
                <h1>What have I learned in this class?</h1>
                <p>I learned a lot in this class and am very happy I decided to take it. I expanded my html and css knowledge, learned about query calls and accessing database entries. I learned a great deal with the final project because I decided to use react and flask together.</p>
            </div>
            </div>
        </div>
    )
}
export default About;