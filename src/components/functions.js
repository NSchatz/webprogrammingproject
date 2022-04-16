import React from 'react';
function Functions (){
    function deleteTask(index) {
        var index1 = Reviews.findIndex(obj => obj.id==index);
        parseInt(index1)
        const reducedArr = [...Reviews];
        reducedArr.splice(index1, 1);
        setReviews(reducedArr)
    }
    function savecomments(event) {
        event.preventDefault();
        fetch('/savecomments', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(Reviews)
        }
        ).then(res => res.json()).then(setMessage(true)).catch(error => console.log(error));
          console.log(message);
    }
    return (
        <div>
        <Navbar bg="primary" variant="dark">
              <div className="App-header">
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/checklist">Contact Us</Link>
                  <Link to="/description">Contact Us</Link>
                  <a class='login' href="/login">Login</a>
              </div>
              
            </Navbar>
        <h1>Welcome to the world of Geeks!</h1>
        </div>
    )
}
 
export default Functions;