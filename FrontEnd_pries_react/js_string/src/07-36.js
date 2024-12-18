/*
Write a JavaScript function to create a Zerofilled value with optional +, - sign. 
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"
*/

const zeroFill = (value, numLength, symbol) => {
  let zeroFilled = "0".repeat(numLength - String(value).length) + value;
  if (symbol) zeroFilled = symbol + zeroFilled;
  return zeroFilled;
};

console.log(zeroFill(120, 5, "-"));
console.log(zeroFill(29, 4));
