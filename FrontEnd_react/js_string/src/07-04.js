/*
Write a JavaScript function to remove specified number of characters from a string. 
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
*/

const truncate_string = (word, num) => {
  return word.slice(0, num);
};
console.log(truncate_string("Robin Singh", 4));
