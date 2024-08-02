// src/components/Header.js
import React from 'react';
import './Header.css'; // Add your CSS for the header
import pic from '../andrew.jpg';

const Header = () => (
  <header className="header">
    <div className="logo">
    <img src={pic} alt="Interior" className='img'/>  
    </div>
    <nav className='naav'>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
