/*
Write a JavaScript function to remove non-printable ASCII chars. 
Test Data :
console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
"PHP-MySQL"
*/

const remove_non_ascii = (words) => {
  let res = "";
  for (let letter of words) {
    if (letter.charCodeAt() < 127) res += letter;
  }
  return res;
};

console.log(remove_non_ascii("äÄçÇéÉêPHP-MySQLöÖÐþúÚ"));
