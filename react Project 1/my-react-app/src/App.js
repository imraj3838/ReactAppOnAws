import React from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Logout from './Logout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<div>Welcome to the Home Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

