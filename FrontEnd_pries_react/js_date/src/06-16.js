/*
Write a JavaScript function to count the number of days passed since beginning of the year.

Test Data :
console.log(days_passed(new Date(2015, 0, 15))); 
15
console.log(days_passed(new Date(2015, 11, 14)));
348
*/

const days_passed = (date) => {
  let dayCount = 0;

  if (date.getMonth() == 0) return date.getDate();

  for (let i = 0; i <= date.getMonth() - 1; i++) {
    dayCount += new Date(date.getYear(), i, 0).getDate();
  }
  dayCount += date.getDate();
  return dayCount;
};

console.log(days_passed(new Date(2015, 0, 15)));
console.log(days_passed(new Date(2015, 11, 14)));
