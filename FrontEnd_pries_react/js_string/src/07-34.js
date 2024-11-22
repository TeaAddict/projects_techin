/*
Write a JavaScript function to convert a string to title case. 
Test Data :
console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."
*/

const sentenceCase = (words) => {
  const wordsArr = words.split(" ");
  return wordsArr
    .map((word) => {
      word = word.toLowerCase();
      word = word.charAt(0).toUpperCase() + word.slice(1);
      return word;
    })
    .join(" ");
};
console.log(sentenceCase("PHP exercises. python exercises."));
