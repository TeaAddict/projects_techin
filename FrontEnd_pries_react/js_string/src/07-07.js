/*
Write a JavaScript function to parameterize a string. 
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
*/

const string_parameterize = (data) => {
  return data.toLowerCase().replaceAll(" ", "-").replace(".", "");
};

console.log(string_parameterize("Robin Singh from USA."));
