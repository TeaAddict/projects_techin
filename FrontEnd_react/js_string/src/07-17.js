/*
Write a JavaScript function to chop a string into chunks of a given length. 
Test Data :
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]
*/

const string_chop = (data, num) => {
  if (!num) return data;

  const letterArr = data.split("");

  let res = [];
  let tempArr = [];
  for (let index in letterArr) {
    if (index % num == 0 && index != 0) {
      res = [...res, tempArr.join("")];
      tempArr = [];
    }

    if (index == letterArr.length - 1) {
      tempArr.push(letterArr[index]);
      res = [...res, tempArr.join("")];
    }

    tempArr.push(letterArr[index]);
  }
  return res;
};

console.log(string_chop("w3resource"));
console.log(string_chop("w3resource", 2));
console.log(string_chop("w3resource", 3));
