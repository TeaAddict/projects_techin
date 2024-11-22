/*
 Write a JavaScript function to convert a string in abbreviated form. 
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/
const abbrev_name = (word) => {
  const wordArr = word.split(" ");
  return (
    wordArr.slice(0, wordArr.length - 1) +
    " " +
    wordArr[wordArr.length - 1].slice(0, 1) +
    "."
  );
};
console.log(abbrev_name("Robin Singh"));
