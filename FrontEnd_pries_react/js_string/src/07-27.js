/*
Write a JavaScript function to convert ASCII to Hexadecimal format. 
Test Data :
console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));
Output :
"3132"
"313030"
*/

const ascii_to_hexa = (word) => {
  let res = "";
  for (let index in word) {
    res += word[index].charCodeAt().toString(16);
  }
  return res;
};

console.log(ascii_to_hexa("12"));
console.log(ascii_to_hexa("100"));
