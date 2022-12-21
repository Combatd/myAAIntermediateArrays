/*
Write a function unique that accepts an array as an argument. The function should return a new array containing elements of the input array, without duplicates.
*/

// I don't want to use .includes every time becuse that would be O(n) every iteration of a loop

// 1. Create a hashmap that stores boolean value with each element as a key
// 2. Create a new array that will store unique values
// 3. Im each iteration of a loop, if hashmap does not return true value for an element as a key, push into new array
// 4. Return the new array

function unique(arr) {
  const visitedValues = {};
  const uniqueValues = [];

  let index = 0;
  while (index < arr.length) {
    if (!visitedValues[arr[index]]) {
      uniqueValues.push(arr[index]);
      visitedValues[arr[index]] = true; // keys of javascript objects are always string type
    }
    index++;
  }
  return uniqueValues;
}

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']