// src/App.js
import React, { useState } from 'react';
import { Container, Box, Button, Typography } from '@mui/material';
import { performOCR } from './ocr';
import { parseExtractedText } from './parsing';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './App.css'; 


const App = () => (
  <div className="App">
    <Header />
    <HeroSection />
  
    <Footer />
  </div>
);

export default App;
