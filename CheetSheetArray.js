// 1. Push()
// Definition: Adds one or more elements to the end of an array and returns the new length of the array.
// Syntax: array.push(element1, ..., elementN);
// Example:
let fruits = ["apple", "banana"];
let totalLengthAfterAdded = fruits.push("orange");
console.log(totalLengthAfterAdded); // 3
console.log(fruits); // ['apple', 'banana', 'orange']

// 2. Pop()
// Definition: Removes the last element from an array and returns that element.
// Syntax: array.pop();
// Example:
let vegetables = ["carrot", "broccoli", "spinach"];
let lastRemovedVegetable = vegetables.pop();
console.log(lastRemovedVegetable); // 'spinach'
console.log(vegetables); // ['carrot', 'broccoli']

// 3. Shift()
// Definition: Removes the first element from an array and returns that element.
// Syntax: array.shift();
// Example:
let colors = ["red", "green", "blue"];
let firstRemovedColor = colors.shift();
console.log(firstRemovedColor); // 'red'
console.log(colors); // ['green', 'blue']

// 4. Unshift()
// Definition: Adds one or more elements to the beginning of an array and returns the new length of the array.
// Syntax: array.unshift(element1, ..., elementN);
// Example:
let animals = ["dog", "cat"];
let newLengthAfterUnshift = animals.unshift("elephant");
console.log(newLengthAfterUnshift); // 3
console.log(animals); // ['elephant', 'dog', 'cat']

// 5. Concat()
// Definition: Merges two or more arrays and returns a new array.
// Syntax: array1.concat(array2, ..., arrayN);
// Example:
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
