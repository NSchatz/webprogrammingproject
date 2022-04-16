import React from 'react';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
function Posts (){
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
            {posts.map((item)=>
              <div class='post'>
                <h1>{item.title}</h1>
                <p>Created by {item.user}</p>
                <p>{item.content}</p>
              </div>
              )}
          </div>
        </div>
    )
}
 
export default Posts;