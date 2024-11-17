/*
Write a JavaScript function to remove non-word characters. 
Test Data :
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
"PHP - MySQL"
*/

const remove_non_word = (words) => {
  return words.replace(/[^\w\s-]/g, "");
};

console.log(remove_non_word("PHP ~!@#$%^&*()+`-={}[]|\\:\";'/?><., MySQL"));
