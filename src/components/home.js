import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery';
import "/node_modules/react-image-gallery/styles/css/image-gallery.css";
function Home (){
    var none = false
    const images = [
        {
          original: 'https://s1.cdn.autoevolution.com/images/news/widebody-miata-cyberpunk-darth-vader-looks-like-a-race-car-146759_1.jpg',
          thumbnail: '',
        },
        {
          original: 'https://www.motortrend.com/uploads/sites/25/2021/05/001-lm7-miata.jpg?fit=around%7C875:492',
          thumbnail: '',
        },
        {
          original: 'https://static.carthrottle.com/workspace/uploads/posts/2015/12/9febfadfaa20b86839cf05e015c3844a.jpg',
          thumbnail: '',
        },
      ];
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
            <ImageGallery showThumbnails={none} items={images} />
            <div>
              <h1>Welcome to TurboMiata!</h1>
              <p>My goal with this website is to create a community for turbo miata enthusiasts that want to post with questions or talk about what it is the users are working on.</p>
            </div>
        </div>
    )
}
 
export default Home;