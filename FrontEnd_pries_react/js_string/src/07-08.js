/*
Write a JavaScript function to capitalize the first letter of a string. 
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
*/

const capitalize = (data) => {
  return data.charAt(0).toUpperCase() + data.slice(1);
};

console.log(capitalize("js string exercises"));
