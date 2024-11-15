/*
 Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th. 
Test Data :
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
"1st"
"8th"
"301st"
"402nd"
*/

const humanize_format = (num) => {
  const lastNum = String(num).charAt(String(num).length - 1);

  return !num
    ? ""
    : lastNum == "1"
    ? num + "st"
    : lastNum == "2"
    ? num + "nd"
    : lastNum == "3"
    ? num + "rd"
    : num + "th";
};
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
