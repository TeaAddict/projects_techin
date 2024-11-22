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

// console.log(string_chop("w3resource"));
// console.log(string_chop("w3resource", 2));
// console.log(string_chop("w3resource", 3));

// OG vejo
function string_chop2(str, split = 0) {
  console.log(str);
  if (str.length <= split || split == 0) return [str];
  return [str.slice(0, split), ...string_chop2(str.slice(split), split)];
}
console.log(string_chop2("w3resource"));
console.log(string_chop2("w3resource", 2));
console.log(string_chop2("w3resource", 3));

// let state = false;
// const onClickChangeColor = () => {
//   const nodeElem = document.querySelector("#elems");
//   state
//     ? (nodeElem.style.backgroundColor = "#000000")
//     : (nodeElem.style.backgroundColor = "#ffffff");

//   state = !state;
// };

// const nodeElem = document.querySelector("#elems");
// nodeElem.addEventListener("click", onClickChangeColor);
// console.log(nodeElem);

//
const buttons = document.querySelectorAll("button");

console.log(buttons);
