/*
Write a function tripler(nums) that takes in an array as an arg. 
The function should return a new array containing three times every number of the original array.
*/

// 1. Copy the original array
// 2. Iterate on each element of the copy array tripling the values
// 3. Return the triplied copy array

function tripler(nums) {
  let tripleNums = nums.map((num) => num * 3);
  return tripleNums;
}

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]