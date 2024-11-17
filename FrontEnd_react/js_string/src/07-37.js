/*
Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison. 
Test Data :
console.log(compare_strings('abcd', 'AbcD'));
true
console.log(compare_strings('ABCD', 'Abce'));
false
*/

const compare_strings = (word1, word2) => {
  return word1.toLowerCase() == word2.toLowerCase();
};
console.log(compare_strings("abcd", "AbcD"));
console.log(compare_strings("ABCD", "Abce"));
