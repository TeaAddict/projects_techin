/*
 Write a JavaScript function to convert a Unix timestamp to time.

Test Data :
console.log(Unix_timestamp(1412743274));
"6:41:14"
*/

const Unix_timestamp = (num) => {
  return new Date(num).toLocaleTimeString();
};

console.log(Unix_timestamp(1412743274));
