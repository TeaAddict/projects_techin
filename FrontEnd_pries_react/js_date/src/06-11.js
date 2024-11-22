/*
 Write a JavaScript function to get the maximum date from an array of dates.

Test Data :
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/02/02"
*/

const max_date = (dateArr) => {
  const sortedDateValueArr = dateArr
    .map((val) => new Date(val).getTime())
    .sort((a, b) => b - a);

  const maxDate = new Date(sortedDateValueArr[0]);
  const year = maxDate.getFullYear();
  const month = maxDate.getMonth() + 1;
  const day = maxDate.getDate();
  return `${year}/${month}/${day}`;
};

console.log(max_date(["2015/02/01", "2015/02/02", "2015/01/03"]));
