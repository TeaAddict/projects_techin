var books = [
  { title: "Knyga #1", price: 10.25 },

  { title: "Knyga #2", price: 5.15 },

  { title: "Knyga #3", price: 7.32 },

  { title: "Knyga #4", price: 54.01 },

  { title: "Knyga #5", price: 77.17 },
];

const printBooks = () => {
  books.forEach((val, index) => console.log(index + 1, val.title));
};
printBooks();

const countBooks = () => {
  return books.reduce((acc) => {
    return acc + 1;
  }, 0);
};
console.log(countBooks());

const addBook = (book) => {
  return books.push(book);
};
console.log(addBook());
