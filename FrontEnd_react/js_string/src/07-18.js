/*
Write a JavaScript function to count the occurrence of a substring in a string. 
Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
Output :
1
*/

const count = (word, subWord) => {
  let occurenceCount = 0;
  let tempString = word;
  let stopLoop = false;

  while (!stopLoop) {
    let index = tempString.search(subWord);
    index != -1 ? occurenceCount++ : (stopLoop = true);
    tempString = tempString.slice(index + subWord.length);
  }
  return occurenceCount;
};
console.log(count("The quick brown fox jumps over the lazy dog he hehe", "he"));
console.log(count("The quick brown fox jumps over the lazy dog", "the"));
console.log(count("The quick brown fox jumps over the lazy dog", "fox", false));

const myGetMonth = (data) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
  ];
  const data1 = new Date(data);
  const mon = data1.getMonth();
  return months[mon];
};
// console.log(myGetMonth("2000-02-05"));
