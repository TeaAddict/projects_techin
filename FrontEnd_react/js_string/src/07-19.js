/*
Write a JavaScript function to escape a HTML string. 
Test Data :
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
Output :
"&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
*/

const escape_HTML = (data) => {
  const symbols = {
    lessThan: { symbol: "<", escape: "&lt;" },
    greaterThan: { symbol: ">", escape: "&gt;" },
    quotationMark: { symbol: '"', escape: "&quot;" },
  };

  let placeHolder = data;

  for (let letter of placeHolder) {
    for (let [key, value] of Object.entries(symbols)) {
      if (letter == value.symbol) {
        placeHolder = placeHolder.replaceAll(letter, value.escape);
        break;
      }
    }
  }
  return placeHolder;
};

console.log(
  escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">')
);
