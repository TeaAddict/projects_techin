/*
Write a JavaScript function to alphabetize a given string. 
Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
Test Data :
console.log(alphabetize_string('United States'));
Output :
"SUadeeinsttt"
*/

const alphabetize_string = (word) => {
  return word.split("").sort().join("").trim();
};

console.log(alphabetize_string("United States"));
