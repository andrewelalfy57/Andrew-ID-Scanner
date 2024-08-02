// src/parsing.js

const nameRegex = /\b[A-Z]+ [A-Z]+ [A-Z]+\b/g;
const dobRegex = /\s(\d{2}-\d{2}-\d{4})/g;
const cardNumberRegex = /\b\d{12}\b/i;
const issueDateRegex = /ISS\s(\d{2}-\d{2}-\d{4})/i;
const expiryDateRegex = /EXP\s(\d{2}-\d{2}-\d{4})/i;
const genderRegex = /\b(?:gender|sex)[:\s-]*(Male|Female|M|F|Non-Binary|Other)\b/i;

export const parseExtractedText = (text) => {
  const nameMatch = text.match(nameRegex);
  const dobMatch = text.match(dobRegex);
  const cardNumberMatch = text.match(cardNumberRegex);
  const issueDateMatch = text.match(issueDateRegex);
  const expiryDateMatch = text.match(expiryDateRegex);
  const genderMatch = text.match(genderRegex);
  const dobfinal=text.match(dobRegex);
  if (issueDateMatch && expiryDateMatch ){
  for (let i = 0; i < dobMatch.length; i++) {
    if ((Date.parse(issueDateMatch[1])!=Date.parse(dobMatch[i]))&(Date.parse(expiryDateMatch[1]!=Date.parse(dobMatch[i])))){
      dobfinal=dobMatch[i];
    }  
    dobfinal[i].replace(issueDateMatch[1]," ");
  }
}
  return {
    name: nameMatch ? nameMatch[1] : 'Not Found',
    birthday: dobfinal ? dobfinal[1] : 'Not Found',
    cardNumber: cardNumberMatch ? cardNumberMatch : 'Not Found',
    issueDate: issueDateMatch ? issueDateMatch[1] : 'Not Found',
    expiryDate: expiryDateMatch ? expiryDateMatch[1] : 'Not Found',
    gender: genderMatch ? genderMatch[1] : 'Not Found',
    textss:text,
  };
};
