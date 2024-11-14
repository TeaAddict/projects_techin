/*
Write a JavaScript function to hide email addresses to protect from unauthorized user. 
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/

const protect_email = (email) => {
  const nameEmailArr = email.split("@");
  const nameLastName = nameEmailArr[0].split("_");
  return nameLastName[0] + "..." + nameEmailArr[1];
};
console.log(protect_email("robin_singh@example.com"));
