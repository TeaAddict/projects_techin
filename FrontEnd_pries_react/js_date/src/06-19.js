/*
Write a JavaScript function to get the day of the month, 2 digits with leading zeros. 
Test Data :
d= new Date(2015, 10, 1); 
console.log(day_of_the_month(d));
"01"
*/

const day_of_the_month = (dateObj) => {
  let day = dateObj.getDate();
  if (String(day).length == 1) day = "0" + day;
  return day;
};
console.log(day_of_the_month(new Date(2015, 10, 1)));
