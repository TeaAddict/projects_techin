
function getServings(){
    const count = {};
    const servings = prompt("Enter servings: ").split(",")

    servings.forEach((serving)=>count[serving] = (count[serving] || 0) + 1);
return count
}
console.log(getServings());
