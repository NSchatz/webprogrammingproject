import React, { Component } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import CheckList from './components/checklist';
import Description from './components/description';
import Login from './components/login';
import './App.css';
 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            
            
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/checklist' element={< CheckList />}></Route>
                 <Route exact path='/description' element={< Description />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
          </Routes>
          </div>
       </Router>
       
   );
  }
}
 
export default App;