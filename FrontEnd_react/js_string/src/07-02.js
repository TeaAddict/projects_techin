/*
Write a JavaScript function to check whether a string is blank or not. 
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false
Click me to see the solution
*/

const is_Blank = (data) => {
  return data == "";
};
console.log(is_Blank(""));
console.log(is_Blank("abc"));
