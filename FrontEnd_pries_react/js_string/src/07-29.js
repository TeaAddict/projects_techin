/*
Write a JavaScript function to find a word within a string. 
Test Data :
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
Output :
"'fox' was found 1 times."
"'aa' was found 2 times."
*/

const search_word = (words, searchWord) => {
  let count = 0;
  while (words.search(searchWord) !== -1) {
    words = words.slice(words.search(searchWord) + searchWord.length);
    count++;
  }
  return `'${searchWord}' was found ${count} times.`;
};

console.log(search_word("The quick brown fox", "fox"));
console.log(search_word("aa, bb, cc, dd, aa", "aa"));
