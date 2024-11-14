function getServings() {
  const count = {};
  const servings = prompt("Enter servings: ").split(",");
  if (!servings[0]) return {};

  servings.forEach((serving) => (count[serving] = (count[serving] || 0) + 1));
  return count;
}
const res = getServings();

function printServings(obj) {
  for (let [key, value] of Object.entries(obj)) {
    value == 1
      ? console.log(`${key}: ${value} serving`)
      : console.log(`${key}: ${value} servings`);
  }
}
printServings(res);
