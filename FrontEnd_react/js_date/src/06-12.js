/*
Write a JavaScript function to get the minimum date from an array of dates. 

Test Data :
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/01/03"
*/

const min_date = (dateArr) => {
  const sortedDateValueArr = dateArr
    .map((val) => new Date(val).getTime())
    .sort();

  const minDate = new Date(sortedDateValueArr[0]);
  const year = minDate.getFullYear();
  const month = minDate.getMonth() + 1;
  const day = minDate.getDate();
  return `${year}/${month}/${day}`;
};

console.log(min_date(["2015/02/01", "2015/02/02", "2015/01/03"]));
