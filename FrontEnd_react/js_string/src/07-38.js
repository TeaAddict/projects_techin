/*
Write a JavaScript function to create a case-insensitive search. 
Test Data :
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
"Not Matched"
*/

const case_insensitive_search = (words, word) => {
  return words.toLowerCase().search(word.toLowerCase()) != -1
    ? "Matched"
    : "Not Matched";
};
console.log(case_insensitive_search("JavaScript Exercises", "exercises"));
console.log(case_insensitive_search("JavaScript Exercises", "Exercises"));
console.log(case_insensitive_search("JavaScript Exercises", "Exercisess"));
