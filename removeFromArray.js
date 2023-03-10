/*
Write a function that takes a location, either "FRONT" or "BACK" and removes the element at either the front or back of the given array. 
If location is anything besides "FRONT" or "BACK", print an error. 
Your function should not return anything and should mutate the original array.
*/

// 1. Pop from the end of array if back is location argument
// 2. Shift from the beginning of array if front is location argument
// 3. Return the mutated array

function removeFromArray(location, arr) {
  if (location.toUpperCase() === 'FRONT') {
    arr.shift();
  } else if (location.toUpperCase() === 'BACK') {
    arr.pop();
  } else {
    console.log('Error!');
  }
}

testArray = [0,1,2,3,4]

removeFromArray("FRONT", testArray)
console.log(testArray) // [1,2,3,4]

removeFromArray("BACK", testArray)
console.log(testArray) // [1,2,3]

removeFromArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [1,2,3]