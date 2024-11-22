/*
Write a JavaScript function to capitalize the first letter of each word in a string. 
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
*/

const capitalize_Words = (data) => {
  const wordArr = data.split(" ");
  return wordArr.reduce(
    (acc, word) => acc + " " + word.charAt(0).toUpperCase() + word.slice(1),
    ""
  );
};
console.log(capitalize_Words("js string exercises"));
