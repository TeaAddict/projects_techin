/*
Write a JavaScript program to calculate age. 

Test Data :
console.log(calculate_age(new Date(1982, 11, 4))); 
32
console.log(calculate_age(new Date(1962, 1, 1)));
53
*/

const calculate_age = (dateObj) => {
  return new Date().getFullYear() - dateObj.getFullYear();
};

console.log(calculate_age(new Date(1982, 11, 4)));
console.log(calculate_age(new Date(1962, 1, 1)));
