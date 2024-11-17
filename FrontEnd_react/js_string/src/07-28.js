/*
Write a JavaScript function to convert Hexadecimal to ASCII format. 
Test Data :
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));
Output :
"12"
"100"
*/

const hex_to_ascii = (data) => {
  let copy = data;
  let res = [];
  let isRunning = true;
  while (isRunning == true) {
    if (copy.length <= 2) isRunning = false;
    const nn = copy.slice(0, 2).charCodeAt(1);
    console.log(nn);
    res = [...res, nn];
    copy = copy.slice(2);
  }
  return res;
};
console.log(hex_to_ascii("3132"));
console.log(hex_to_ascii("313030"));
