/*
Write a JavaScript function to remove HTML/XML tags from string. 
Test Data :
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
"PHP Exercises"
*/

const strip_html_tags = (words) => {
  return words.replace(/<[^>]*>/g, "");
};

console.log(strip_html_tags("<p><strong><em>PHP Exercises</em></strong></p>"));
