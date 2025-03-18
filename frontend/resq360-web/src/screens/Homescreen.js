import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div>
      <h1>Welcome to ResQ360</h1>
      <p>Your safety companion in emergencies.</p>
      <nav>
        <ul>
          <li><Link to="/emergency">Emergency</Link></li>
          <li><Link to="/chatbot">Chatbot</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/emergency-numbers">Emergency Numbers</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomeScreen;