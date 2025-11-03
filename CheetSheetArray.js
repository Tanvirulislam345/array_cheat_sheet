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

// 15. find()
// Definition: Returns the value of the first element in the array that satisfies the provided testing function.
// Syntax: array.find(callback(element, index, array), thisArg);
// Example:
let inventory = [
  { name: "apple", quantity: 5 },
  { name: "banana", quantity: 0 },
  { name: "cherry", quantity: 10 },
];
let foundItem = inventory.find((item) => item.quantity > 0);
console.log(foundItem); // { name: 'apple', quantity: 5 }

// 16. findIndex()
// Definition: Returns the index of the first element in the array that satisfies the provided testing function.
// Syntax: array.findIndex(callback(element, index, array), thisArg);
// Example:
let scores = [10, 20, 30, 40];
let index = scores.findIndex((score) => score > 25);
console.log(index); // 2

// 17. every()
// Definition: Tests whether all elements in the array pass the test implemented by the provided function.
// Syntax: array.every(callback(element, index, array), thisArg);
// Example:
let allAboveTen = [12, 15, 20].every((num) => num > 10);
console.log(allAboveTen); // true

// 18. some()
// Definition: Tests whether at least one element in the array passes the test implemented by the provided function.
// Syntax: array.some(callback(element, index, array), thisArg);
// Example:
let hasNegative = [1, -2, 3].some((num) => num < 0);
console.log(hasNegative); // true

// 19. reduce()
// Definition: Executes a reducer function on each element of the array, resulting in a single output value.
// Syntax: array.reduce(callback(accumulator, currentValue, index, array), initialValue);
// Example:
let valuesToReduce = [1, 2, 3, 4];
let reducedValue = valuesToReduce.reduce((acc, val) => acc + val, 0);
console.log(reducedValue); // 10

// 20. includes()
// Definition: Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// Syntax: array.includes(searchElement, fromIndex);
// Example:
let numbersToCheck = [1, 2, 3, 4, 5];
let includesThree = numbersToCheck.includes(3);
console.log(includesThree); // true

// 21. flat()
// Definition: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Syntax: array.flat(depth);
// Example:
let nestedArray = [1, [2, [3, [4]]]];
let flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // [1, 2, 3, [4]]

// 22. flatMap()
// Definition: First maps each element using a mapping function, then flattens the result into a new array.
// Syntax: array.flatMap(callback(currentValue, index, array), thisArg);
// Example:
let wordsToSplit = ["hello world", "foo bar"];
let flatMappedArray = wordsToSplit.flatMap((str) => str.split(" "));
console.log(flatMappedArray); // ['hello', 'world', 'foo', 'bar']

// 23. fill()
// Definition: Fills all the elements of an array from a start index to an end index with a static value.
// Syntax: array.fill(value, start, end);
// Example:
let fillArray = [1, 2, 3, 4, 5];
fillArray.fill(0, 1, 4);
console.log(fillArray); // [1, 0, 0, 0, 5]

// 24. Keys()
// Definition: Returns a new Array Iterator object that contains the keys for each index in the array.
// Syntax: array.keys();
// Example:
let sampleArray = ["a", "b", "c"];
let keysIterator = sampleArray.keys();
console.log(Array.from(keysIterator)); // [0, 1, 2]

// 25. Values()
// Definition: Returns a new Array Iterator object that contains the values for each index in the array.
// Syntax: array.values();
// Example:
let sampleArrayValues = ["x", "y", "z"];
let valuesIterator = sampleArrayValues.values();
console.log(Array.from(valuesIterator)); // ['x', 'y', 'z']

// 26. Entries()
// Definition: Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// Syntax: array.entries();
// Example:
let sampleArrayEntries = [10, 20, 30];
let entriesIterator = sampleArrayEntries.entries();
console.log(Array.from(entriesIterator)); // [[0, 10], [1, 20], [2, 30]]

// 27. CopyWithin()
// Definition: Shallow copies part of an array to another location in the same array and returns it without modifying its length.
// Syntax: array.copyWithin(target, start, end);
// Example:
let copyArray = [1, 2, 3, 4, 5];
copyArray.copyWithin(0, 3, 5);
console.log(copyArray); // [4, 5, 3, 4, 5]

// 28. Array.from()
// Definition: Creates a new, shallow-copied Array instance from an array-like or iterable object.
// Syntax: Array.from(arrayLike, mapFn, thisArg);
// Example:
let stringToArray = Array.from("hello");
console.log(stringToArray); // ['h', 'e', 'l', 'l', 'o']

// 29. Array.isArray()
// Definition: Determines whether the passed value is an Array.
// Syntax: Array.isArray(value);
// Example:
let checkArray = [1, 2, 3];
console.log(Array.isArray(checkArray)); // true
console.log(Array.isArray("not an array")); // false

// 30. Array.of()
// Definition: Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
// Syntax: Array.of(element0, element1, ..., elementN);
// Example:
let arrayOfNumbers = Array.of(7, 8, 9);
console.log(arrayOfNumbers); // [7, 8, 9]

// 31. copyWithin()
// Definition: Shallow copies part of an array to another location in the same array and returns it without modifying its length.
// Syntax: array.copyWithin(target, start, end);
// Example:
let copyWithinArray = [1, 2, 3, 4, 5];
copyWithinArray.copyWithin(0, 3, 5);
console.log(copyWithinArray); // [4, 5, 3, 4, 5]

// 32. toString()
// Definition: Returns a string representing the specified array and its elements.
// Syntax: array.toString();
// Example:
let arrayToString = [1, 2, 3];
console.log(arrayToString.toString()); // '1,2,3'

// 33. toLocaleString()
// Definition: Returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods.
// Syntax: array.toLocaleString();
// Example:
let dateArray = [new Date("2020-01-01"), new Date("2021-01-01")];
console.log(dateArray.toLocaleString()); // '1/1/2020, 12:00:00 AM, 1/1/2021, 12:00:00 AM' (format may vary based on locale)

// 34. lastIndexOf()
// Definition: Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// Syntax: array.lastIndexOf(searchElement, fromIndex);
// Example:
let lastIndexArray = [1, 2, 3, 2, 1];
let lastIndex = lastIndexArray.lastIndexOf(2);
console.log(lastIndex); // 3

// 35. at()
// Definition: Returns the item at the given index, allowing for positive and negative integers.
// Syntax: array.at(index);
// Example:
let atArray = ["a", "b", "c", "d"];
console.log(atArray.at(1)); // 'b'
console.log(atArray.at(-1)); // 'd'

// End of CheetSheetArray.js
