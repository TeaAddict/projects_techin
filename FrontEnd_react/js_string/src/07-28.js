/*
Write a JavaScript function to convert Hexadecimal to ASCII format. 
Test Data :
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));
Output :
"12"
"100"
*/

const hex_to_ascii = (hex) => {
  console.log("Hex:", hex, [hex]);
  if (hex.length <= 2) return [hex];
  return [hex.slice(0, 2), ...hex_to_ascii(hex.slice(2))];
};

// console.log(hex_to_ascii("3132"));
// console.log(hex_to_ascii("313030"));

// const test = (data) => {
//   if (data.length <= 1) return data;
//   return test(data.slice(1));
// };
// console.log(test("32134213"));
