/*
Write a JavaScript function to get a part of a string after a specified character.
Test Data :
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
Output :
"w3resource"
"xercises"
*/

const subStrAfterChars = (word, char, direction) => {
  //   for (let letter in word) {
  //     console.log(letter, word[letter]);
  //   }

  return direction == "b"
    ? word.slice(word.search(char) + 1)
    : direction == "a"
    ? word.slice(0, word.search(char))
    : "Error";
};

console.log(subStrAfterChars("w3resource: JavaScript Exercises", ":", "a"));
console.log(subStrAfterChars("w3resource: JavaScript Exercises", "E", "b"));
