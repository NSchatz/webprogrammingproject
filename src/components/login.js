import React from 'react';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
function Login (){
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('/getinformation', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then((response) => response.json())
          .then((data) => {
            setPosts(data);
            console.log(data);
            console.log(posts);
          });
      }, []);
    
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
            
            {posts.map((item)=>
            <div class='post'>
              <h1>{item.title} by {item.user}</h1>
              <p>{item.content}</p>
            </div>
            )}
        </div>
    )
}
 
export default Login;