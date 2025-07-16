/* write a for loop that iterates through the array ["london" , "newyork", "berlin" ,"tokyo"] and skips "paris"
stores the other cities in a new array named "visited cities"
*/
let Cities = ["london", "newyork", "berlin","paris", "tokyo"]      
let visitedCities = []
for (let i = 0; i <Cities.length; i++) {
        if (Cities[i] === "paris") {
          continue;            
        } 
        visitedCities.push(Cities[i]);
}
// console.log(visitedCities);

/* use a for-of loop to iterate through the array `[1,2,3,4,5]` and stop when the number `4` is found.
store the no before `4` in an array named `smallNumbers` */

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
let previousNumber = null;

for (const num of numbers) {
    if (num === 4) {
        break;
    }
    previousNumber = num;
    smallNumbers.push(previousNumber);
}
// console.log("smallNumbers before 4:", smallNumbers);    // [1, 2, 3]
// If you want to include the last number before 4, you can do it like this
// if (previousNumber !== null) {
//     smallNumbers.push(previousNumber);
// }

let worldCities = {
  "london": 50000,
  "newyork": 80000,
  "berlin": 30000,
  "tokyo": 100000,
  "paris": 60000
}
let largeCities = {}

for (const city in worldCities) {
    if (worldCities[city] > 60000) {
        largeCities[city] = worldCities[city];
    }
}
// console.log("Large cities:", largeCities);  // { newyork: 80000, tokyo: 100000, paris: 60000 }


/* write a for -each loop that iterates through the array `[1,2,3,4,5]` and prints each number multiplied by 2 */

let numbersArray = [1, 2, 3, 4, 5];
let multipliedByTwo = [];
// console.log("Numbers multiplied by 2:", multipliedByTwo); // [2, 4, 6, 8, 10]
numbersArray.forEach(num => {
  // if(num === 4) {
  //   return; // Skip the number 4
  // }
  let mul = num * 2;
  
  multipliedByTwo.push(mul)//     console.log(num * 2);
} );  
console.log(numbersArray); // [1, 2, 3, 4, 5] (original array remains unchanged)
console.log("Numbers multiplied by 2:", multipliedByTwo); // [2, 4, 6, 8, 10]
