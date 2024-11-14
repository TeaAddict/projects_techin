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

const humanize_format = (num) =>
    {
    return !num ? "" : String(num).charAt(String(num).length - 1) == "1" ? num + "st" : String(num).charAt(String(num).length - 1) == "2" ? num + "nd" : num + "th"
}
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
