/*
 Write a JavaScript function check if a string ends with specified suffix. 
Test Data :
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
true
console.log(string_endsWith('JS PHP PYTHON',''));
false
*/

const string_endsWith = (words, endWord) => {
  const wordsArr = words.split(" ");
  return wordsArr[wordsArr.length - 1] == endWord;
};
console.log(string_endsWith("JS PHP PYTHON", "PYTHON"));
console.log(string_endsWith("JS PHP PYTHON", ""));
