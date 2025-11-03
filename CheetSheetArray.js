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

// 6. Slice()
// Definition: Returns a shallow copy of a portion of an array into a new array object.
// Syntax: array.slice(begin, end);
// Example:
let numbers = [10, 20, 30, 40, 50];
let slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // [20, 30, 40]

// 7. Splice()
// Definition: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Syntax: array.splice(start, deleteCount, item1, ..., itemN);
// Example:
let letters = ["a", "b", "c", "d", "e"];
let removedLetters = letters.splice(2, 2, "x", "y");
console.log(removedLetters); // ['c', 'd']
console.log(letters); // ['a', 'b', 'x', 'y', 'e']

// 8. IndexOf()
// Definition: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// Syntax: array.indexOf(searchElement, fromIndex);
// Example:
let pets = ["dog", "cat", "fish", "cat"];
let firstCatIndex = pets.indexOf("cat");
console.log(firstCatIndex); // 1

// 9. Join()
// Definition: Joins all elements of an array into a string and returns this string.
// Syntax: array.join(separator);
// Example:
let words = ["Hello", "world", "!"];
let sentence = words.join(" ");
console.log(sentence); // 'Hello world !'

// 10. Sort()
// Definition: Sorts the elements of an array in place and returns the sorted array.
// Syntax: array.sort(compareFunction);
// Example:
let unsortedNumbers = [3, 1, 4, 1, 5, 9];
unsortedNumbers.sort((a, b) => a - b);
console.log(unsortedNumbers); // [1, 1, 3, 4, 5, 9]

// 11. Reverse()
// Definition: Reverses the order of the elements in an array in place.
// Syntax: array.reverse();
// Example:
let digits = [1, 2, 3, 4, 5];
digits.reverse();
console.log(digits); // [5, 4, 3, 2, 1]

// 12. forEach()
// Definition: Executes a provided function once for each array element.
// Syntax: array.forEach(callback(currentValue, index, array), thisArg);
// Example:
let sum = 0;
let values = [1, 2, 3, 4];
values.forEach((value) => {
  sum += value;
});
console.log(sum); // 10

// 13. Map()
// Definition: Creates a new array populated with the results of calling a provided function on every element in the calling array.
// Syntax: array.map(callback(currentValue, index, array), thisArg);
// Example:
let originalArray = [1, 2, 3];
let mappedArray = originalArray.map((num) => num * 2);
console.log(mappedArray); // [2, 4, 6]

// 14. Filter()
// Definition: Creates a new array with all elements that pass the test implemented by the provided function.
// Syntax: array.filter(callback(element, index, array), thisArg);
// Example:
let mixedNumbers = [10, 15, 20, 25, 30];
let filteredNumbers = mixedNumbers.filter((num) => num > 20);
console.log(filteredNumbers); // [25, 30]
