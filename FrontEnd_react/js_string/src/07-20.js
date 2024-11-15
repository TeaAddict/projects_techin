/*
Write a JavaScript function that can pad (left, right) a string to get to a determined length. 
Test Data :
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
Output :
"0123"
"12300000"
*/

const formatted_string = (lengthString, num, paddingSide = "r") => {
  const numLength = String(num).length;
  const maxLength = lengthString.length;

  return paddingSide == "l"
    ? "0".repeat(maxLength - numLength) + String(num)
    : String(num) + "0".repeat(maxLength - numLength);
};

console.log(formatted_string("0000", 123, "l"));
console.log(formatted_string("00000000", 123, ""));
