/*
Write a JavaScript function to remove the first occurrence of a given 'search string' from a string. 
Test Data :
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
Output :
"The quick brown fox jumps over lazy dog"
*/

const remove_first_occurrence = (sentence, removeStr) => {
  const removeLoc = sentence.search(removeStr);

  return sentence[removeLoc - 1] == " "
    ? sentence.replace(" " + removeStr, "")
    : sentence[removeLoc + removeStr.length] == " "
    ? sentence.replace(removeStr + " ", "")
    : sentence.replace(removeStr, "");
};

console.log(
  remove_first_occurrence("The quick brown fox jumps over the lazy dog", "the")
);
