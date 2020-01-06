import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      <div className="splash">
        <nav className="login-signup">
          <Link className="nav-btn" to="/login">SIGN IN</Link>
          <Link className="nav-btn" to="/signup">CREATE AN ACCOUNT</Link>
        </nav>
      </div>
      <div className="splash-content">
        <div className="left-side">
          <img className="bottles" src={window.bottles} />
          <h1 className="bottles-text">FITNESS</h1>
        </div>
        <div className="right-side">
        </div>
      </div>

    </div>
  );


  return currentUser ? <div></div> : sessionLinks();
};


export default Greeting;