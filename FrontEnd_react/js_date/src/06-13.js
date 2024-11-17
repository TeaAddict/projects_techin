/*
Write a JavaScript function that will return the number of minutes in hours and minutes. 

Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."
*/

const timeConvert = (num) => {
  const hours = Math.floor(num / 60);
  const minutes = num - hours * 60;

  return `${num} minutes = ${hours} hour(s) and ${minutes} minute(s).`;
};

console.log(timeConvert(200));
