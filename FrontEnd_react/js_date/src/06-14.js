/*
Write a JavaScript function to get the amount of days of a year. 

Test Data :
console.log(days_of_a_year(2015)); 
365
console.log(days_of_a_year(2016));
366
*/

const days_of_a_year = (year) => {
  let count = 0;
  for (let i = 0; i < 12; i++) {
    count += new Date(year, i, 0).getDate();
  }
  return count;
};

console.log(days_of_a_year(2015));
console.log(days_of_a_year(2016));
