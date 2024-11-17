/*
Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML. 
Test Data :
console.log(escape_html('PHP & MySQL'));
"PHP &amp; MySQL"
console.log(escape_html('3 > 2'));
"3 &gt; 2"
*/

const escape_html = (words) => {
  const escapeChars = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  };
  for ([key, value] of Object.entries(escapeChars)) {
    if (words.search(key) != -1) words = words.replaceAll(key, value);
  }
  return words;
};
console.log(escape_html("PHP & MySQL"));
console.log(escape_html("3 > 2"));
