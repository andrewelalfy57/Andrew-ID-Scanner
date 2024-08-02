// src/components/HeroSection.js

import React, { useState } from 'react';
import { Container, Box, Button, Typography } from '@mui/material';
import { performOCR } from '../ocr';
import { parseExtractedText } from '../parsing';
import './HeroSection.css'; // Add your CSS for the hero section


const HeroSection = () => {
  const [parsedData, setParsedData] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      // Perform OCR and extract data
      const text = await performOCR(file);
      console.log(text);
      const data = parseExtractedText(text);
      setParsedData(data);

    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <Typography variant="h2" component="h1" className="hero-title">
            Identity Card Scanner
          </Typography>
          <Typography variant="h5" component="p" className="hero-subtitle">
            Scan and Extract Information with Ease
          </Typography>
          <Button variant="contained" component="label" className="upload-button">
            Upload Identity Card
            <input type="file" hidden onChange={handleFileUpload} />
          </Button>
          <Box mt={4} className="content-box">
            {imageUrl && (
              <Box className="image-preview">
                <img src={imageUrl} alt="Uploaded Identity Card" className="uploaded-image" />
              </Box>
            )}
            {parsedData && (
              <Box className="info-box">
                <Typography variant="h6" className='ext'>Extracted Information:</Typography>
                <Typography variant="body1" className='ext'>Name: {parsedData.name}</Typography>
                <Typography variant="body1" className='ext'>Birthday: {parsedData.birthday}</Typography>
                <Typography variant="body1" className='ext'>Card Number: {parsedData.cardNumber}</Typography>
                <Typography variant="body1" className='ext'>Issue Date: {parsedData.issueDate}</Typography>
                <Typography variant="body1" className='ext'>Expiry Date: {parsedData.expiryDate}</Typography>
                <Typography variant="body1" className='ext'>Gender: {parsedData.gender}</Typography>
              </Box>
            )}
          </Box>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

