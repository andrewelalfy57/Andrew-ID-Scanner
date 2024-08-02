// src/ocr.js
import Tesseract from 'tesseract.js';

export const performOCR = async (file) => {
  const result = await Tesseract.recognize(file, 'eng', {
    logger: (m) => console.log(m),
  });
  return result.data.text;
};
