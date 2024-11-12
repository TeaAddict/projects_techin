// 1.
const lyginiaiNelyginiai = (start, end) => {
  let lyginiai = 0;
  let nelyginiai = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) lyginiai += i;
    if (i % 2 == 1) nelyginiai += i;
  }
  return [lyginiai, nelyginiai];
};
// console.log(lyginiaiNelyginiai(0, 100));

// 2.
const arrow = (num) => {
  const exercises = [
    "Push-ups",
    "Sit-ups",
    "Bear Crawls",
    "1 mile run",
    "60 second plank",
    "Burpees",
    "Jumping Jacks",
    "Squats",
    "Weighted Squats",
    "Inch Worms",
  ];

  if (exercises.length < num) {
    console.log("Skaicius per didelis");
    return 0;
  } else if (num <= 0) {
    console.log("Skaicius per mazas");
    return 0;
  }

  let resultArr = [];
  for (let i = 0; i < num; i++) {
    let randNum = 0;
    do {
      randNum = Math.floor(Math.random() * exercises.length);
    } while (resultArr.includes(exercises[randNum]));
    resultArr.push(exercises[randNum]);
  }
  return resultArr;
};
// console.log(arrow(5));

// 3.
const monetuSkaiciuokle = () => {
  let count = 0;
  let stop = false;
  while (stop == false) {
    if (prompt("Ar noretumet monetos?") === "Taip") {
      count++;
      console.log(`Jus turite ${count} moneta/as.`);
    } else {
      stop = true;
      console.log("Iki!");
    }
  }
  return count;
};
// console.log(monetuSkaiciuokle());

// 4.
const names = [
  "Olivia",
  "Jackson",
  "Sophia",
  "Elijah",
  "Ava",
  "Liam",
  "Isabella",
];

const arrOperations = (names) => {
  const noOlivia = names.filter((val) => val != "Olivia");
  console.log(noOlivia);

  names.unshift("Mason");
  names.push("Deividas");
  return names;
};
// arrOperations(names);

const filterName = (names, name) => {
  return names.filter((val) => val != name);
};
// console.log(filterName(names, "Jackson"));

const addBob = (names) => {
  return names
    .map((val) => (val += "withBob"))
    .sort()
    .reverse();
};
// console.log(addBob(names));

const percentageCalculator = (event) => {
  event.preventDefault();

  const percentage = document.querySelector("#percentage").value;
  const number = document.querySelector("#number").value;

  const res = (number / 100) * percentage;
  document.querySelector("#result").textContent = "Result: " + res;
};

document
  .querySelector("#percentageForm")
  .addEventListener("submit", percentageCalculator);
