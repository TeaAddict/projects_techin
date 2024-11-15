// 1.
const newDiv = document.createElement("div");
newDiv.innerHTML = "Hello, DOM!";
newDiv.classList.add("greeting");
document.body.append(newDiv);

// 2.
const div = document.querySelector(".greeting");
div.style.backgroundColor = "lightblue";
div.style.color = "darkblue";
div.style.padding = "10px";

// 3.
const ul = document.createElement("ul");
document.body.append(ul);
let liArr = [];
for (let i = 0; i < 5; i++) {
  const tempEl = document.createElement("li");
  tempEl.innerHTML = `Item ${i + 1}`;
  liArr.push(tempEl);
  ul.append(tempEl);
}

// 4.
const button = document.createElement("button");
button.innerHTML = "Click Me";
document.body.append(button);

const onClick = (e) => {
  console.log("Button Clicked!");
};
button.addEventListener("click", onClick);

// 5.
const button2 = document.createElement("button");
button2.innerHTML = "Remove Item";
document.body.append(button2);

const onClickRemoveItem = (e) => {
  const lastLi = document.querySelector("li:last-child");
  lastLi.remove();
};
button2.addEventListener("click", onClickRemoveItem);

// 6.
const txtInput = document.createElement("input");
document.body.append(txtInput);
const button3 = document.createElement("button");
document.body.append(button3);
button3.innerHTML = "Add item";

const onClickGetValue = (e) => {
  const res = txtInput.value;
  const newLi = document.createElement("li");
  newLi.innerHTML = res;
  const selectUl = document.querySelector("ul");
  selectUl.append(newLi);
};
button3.addEventListener("click", onClickGetValue);

// 7.
const newP = document.createElement("p");
newP.innerHTML = "Random text";
document.body.append(newP);
const button4 = document.createElement("button");
button4.innerHTML = "Change Text";
document.body.append(button4);

const onClickChangeText = (e) => {
  newP.innerHTML = "The text has been changed!";
};
button4.addEventListener("click", onClickChangeText);

// 8.
const divBox = document.createElement("div");
divBox.innerHTML = "Random div box text";
divBox.classList.add("box");
document.body.append(divBox);

const button5 = document.createElement("button");
button5.innerHTML = "Toggle Highlist";

const onClickChangeBg = (e) => {
  divBox.classList.toggle("highlight");
};
button5.addEventListener("click", onClickChangeBg);
document.body.append(button5);

// 9.
const button6 = document.createElement("button");
button6.innerHTML = "Add Row";
document.body.append(button6);
const table = document.createElement("table");
const tHeader = document.createElement("thead");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
th1.innerHTML = "Name";
th2.innerHTML = "Age";
tHeader.append(th1);
tHeader.append(th2);
table.append(tHeader);
document.body.append(table);

const onClickAddRow = (e) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = "Random data";
  table.append(newRow);
};
button6.addEventListener("click", onClickAddRow);

// 10.
let count = 0;
const span1 = document.createElement("span");
span1.innerHTML = count;
const button7 = document.createElement("button");
const button8 = document.createElement("button");
button7.innerHTML = "Increase";
button8.innerHTML = "Decrease";
document.body.append(span1);
document.body.append(button7);
document.body.append(button8);

const onClickIncrease = (e) => {
  count++;
  span1.innerHTML = count;
};
const onClickDecrease = (e) => {
  count--;
  span1.innerHTML = count;
};
button7.addEventListener("click", onClickIncrease);
button8.addEventListener("click", onClickDecrease);
