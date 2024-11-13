const total = (arr) => {
  return arr.reduce((acc, num) => acc + num);
};
console.log(total([1, 2, 3]));

const stringConcat = (arr) => {
  return arr.reduce((acc, num) => String(acc) + String(num));
};
console.log(stringConcat([1, 2, 3]));

const totalVotes = (arr) => {
  return arr.reduce((acc, voter) => {
    return voter.voted ? acc + 1 : acc;
  }, 0);
};
console.log(
  totalVotes([
    { name: "Alice", age: 25, voted: true },
    { name: "Bob", age: 32, voted: false },
    { name: "Carol", age: 29, voted: true },
    { name: "David", age: 45, voted: false },
    { name: "Eve", age: 22, voted: true },
    { name: "Frank", age: 34, voted: false },
    { name: "Grace", age: 40, voted: true },
    { name: "Hank", age: 28, voted: false },
    { name: "Ivy", age: 31, voted: true },
    { name: "Jack", age: 26, voted: false },
  ])
);

const shoppingSpree = (arr) => {
  return arr.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
};
console.log(
  shoppingSpree([
    { title: "Laptop", price: 999.99 },
    { title: "Smartphone", price: 699.99 },
    { title: "Tablet", price: 399.99 },
    { title: "Smartwatch", price: 199.99 },
    { title: "Headphones", price: 149.99 },
  ])
);

const flatten = (arr) => {
  return arr.reduce((acc, element) => {
    return [...acc, ...element];
  }, []);
};
console.log(flatten([["1", "2", "3"], [true], [4, 5, 6]]));

const voterResults = (arr) => {
  return arr.reduce(
    (acc, voter) => {
      18 <= voter.age &&
        voter.age <= 25 &&
        (acc["numYoungPeople"]++, voter.voted && acc["numYoungVotes"]++);

      26 <= voter.age &&
        voter.age <= 35 &&
        (acc["numMidPeople"]++, voter.voted && acc["numMidVotes"]++);

      36 <= voter.age &&
        voter.age <= 55 &&
        (acc["numOldPeople"]++, voter.voted && acc["numOldVotes"]++);
      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotes: 0,
      numMidPeople: 0,
      numOldVotes: 0,
      numOldPeople: 0,
    }
  );
};
console.log(
  voterResults([
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ])
);
