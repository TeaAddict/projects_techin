var books = [
  { title: "Knyga #1", price: 10.25 },
  { title: "Knyga #2", price: 5.15 },
  { title: "Knyga #3", price: 7.32 },
  { title: "Knyga #4", price: 54.01 },
  { title: "Knyga #5", price: 77.17 },
];

// 1.
const printBooks = () => {
  books.forEach((val, index) => console.log(index + 1, val.title));
};
printBooks();

// 2.
const countBooks = () => {
  return books.reduce((acc) => {
    return acc + 1;
  }, 0);
};
console.log(countBooks());

// 3.
const addBook = (book) => {
  return books.push(book);
};
console.log(addBook({ title: "Knyga #6", price: 99.99 }));

// 4.
const getLastBook = () => {
  return books[books.length - 1];
};
console.log(getLastBook());

// 5.
const getTotalPrice = () => {
  return books.reduce((acc, book) => {
    return acc + book.price;
  }, 0);
};
console.log(getTotalPrice());

// 6.
const calculateDiscount = () => {
  books.forEach(
    (book) =>
      book.price > 10 &&
      console.log(
        `Knyga: ${book.title} sena kaina: ${book.price} Pardavimo kaina: ${(
          book.price * 0.75
        ).toFixed(2)} Pritaikyta nuolaida -25%`
      )
  );
};
calculateDiscount();

// 7.
const sortAscBooks = () => {
  return books.sort((a, b) => a.price - b.price);
};
console.log(sortAscBooks());

// 8.
const sortBooks = () => {
  const ascBooks = books.slice().sort((a, b) => a.title.localeCompare(b.title));
  const descBooks = books
    .slice()
    .sort((a, b) => b.title.localeCompare(a.title));

  console.log(ascBooks);
  console.log(descBooks);
};
sortBooks();

// 9.
const filterBooks = () => {
  return books.filter((book) => book.price > 7.5);
};
console.log(filterBooks());
