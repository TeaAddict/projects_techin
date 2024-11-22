/*
Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. 
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
*/

const swapcase = (data) => {
  return data
    .split("")
    .map((letter) =>
      letter == letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join("");
};
console.log(swapcase("AaBbc"));
