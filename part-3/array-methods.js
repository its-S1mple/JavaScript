// --- 1. Adding/Removing Elements (Modifies Original Array) ---

console.log("--- 1. Adding/Removing Elements (Modifies Original) ---");
let fruits = ["apple", "banana", "cherry"];
console.log("Original:", fruits); // ["apple", "banana", "cherry"]

// push(): Adds one or more elements to the end.
fruits.push("date");
console.log("push('date'):", fruits); // ["apple", "banana", "cherry", "date"]

// pop(): Removes the last element and returns it.
let lastFruit = fruits.pop();
console.log("pop():", fruits, "Removed:", lastFruit); // ["apple", "banana", "cherry"] Removed: date

// unshift(): Adds one or more elements to the beginning.
fruits.unshift("grape", "kiwi");
console.log("unshift('grape', 'kiwi'):", fruits); // ["grape", "kiwi", "apple", "banana", "cherry"]

// shift(): Removes the first element and returns it.
let firstFruit = fruits.shift();
console.log("shift():", fruits, "Removed:", firstFruit); // ["kiwi", "apple", "banana", "cherry"] Removed: grape

// splice(start, deleteCount, item1, ...): Removes/replaces elements at any position.
let removed = fruits.splice(1, 2, "mango", "orange"); // From index 1, remove 2, add mango, orange
console.log("splice(1, 2, 'mango', 'orange'):", fruits, "Removed:", removed); // ["kiwi", "mango", "orange", "cherry"] Removed: ["apple", "banana"]

// --- 2. Iteration & Transformation (Often Returns New Array) ---

console.log("\n--- 2. Iteration & Transformation ---");
let numbers = [1, 2, 3, 4, 5];
console.log("Original numbers:", numbers);

// forEach(callback): Executes a provided function once for each array element.
numbers.forEach(num => console.log(`forEach: ${num * 2}`));
// Output: 2, 4, 6, 8, 10 (does not return a new array)

// map(callback): Creates a NEW array by calling a function on every element.
let doubled = numbers.map(num => num * 2);
console.log("map(num * 2):", doubled); // [2, 4, 6, 8, 10]

// filter(callback): Creates a NEW array with all elements that pass a test.
let evens = numbers.filter(num => num % 2 === 0);
console.log("filter(even):", evens); // [2, 4]

// reduce(callback, initialValue): Reduces the array to a single value.
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("reduce(sum):", sum); // 15

// --- 3. Searching & Finding (Returns Element/Index/Boolean) ---

console.log("\n--- 3. Searching & Finding ---");
let items = ["pen", "book", "pencil", "book"];

// indexOf(element, fromIndex): Returns the first index of an element, or -1 if not found.
console.log("indexOf('book'):", items.indexOf("book")); // 1
console.log("indexOf('eraser'):", items.indexOf("eraser")); // -1

// includes(element, fromIndex): Checks if an array contains a certain element (returns boolean).
console.log("includes('pencil'):", items.includes("pencil")); // true
console.log("includes('marker'):", items.includes("marker")); // false

// find(callback): Returns the VALUE of the first element that satisfies a test.
let foundBook = items.find(item => item === "book");
console.log("find('book'):", foundBook); // book

// findIndex(callback): Returns the INDEX of the first element that satisfies a test.
let bookIndex = items.findIndex(item => item === "book");
console.log("findIndex('book'):", bookIndex); // 1

// --- 4. Transforming & Manipulating (Returns New Array or Modifies Original) ---

console.log("\n--- 4. Transforming & Manipulating ---");
let arr1 = [1, 2];
let arr2 = [3, 4];

// slice(start, end): Returns a shallow copy of a portion of an array into a new array.
let subArray = numbers.slice(1, 4); // From index 1 up to (but not including) index 4
console.log("slice(1, 4) from numbers:", subArray); // [2, 3, 4] (Original numbers array is unchanged)

// concat(arr1, arr2, ...): Joins two or more arrays, returns a NEW array.
let combined = arr1.concat(arr2, [5, 6]);
console.log("concat(arr1, arr2, [5, 6]):", combined); // [1, 2, 3, 4, 5, 6]

// join(separator): Joins all elements into a string.
let words = ["hello", "world"];
let sentence = words.join(" ");
console.log("join(' '):", sentence); // "hello world"

// sort(compareFunction): Sorts elements of an array *in place*.
let unsorted = [3, 1, 4, 1, 5, 9];
unsorted.sort((a, b) => a - b); // Numeric sort ascending
console.log("sort(numeric):", unsorted); // [1, 1, 3, 4, 5, 9]

// reverse(): Reverses the order of elements *in place*.
unsorted.reverse();
console.log("reverse():", unsorted); // [9, 5, 4, 3, 1, 1]

// --- 5. Checking Conditions (Returns Boolean) ---

console.log("\n--- 5. Checking Conditions ---");
let ages = [18, 20, 25, 17];

// every(callback): Tests if ALL elements pass a test.
let allAdults = ages.every(age => age >= 18);
console.log("every(age >= 18):", allAdults); // false (because of 17)

// some(callback): Tests if AT LEAST ONE element passes a test.
let hasAdult = ages.some(age => age >= 18);
console.log("some(age >= 18):", hasAdult); // true

// --- Important Distinction: Modifies Original vs. Returns New Array ---
console.log("\n--- Important Distinction ---");
console.log("Methods that MODIFY the original array (in-place): push, pop, shift, unshift, splice, sort, reverse");
console.log("Methods that RETURN A NEW array: map, filter, reduce, slice, concat");
