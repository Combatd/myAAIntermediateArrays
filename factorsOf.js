/*
Write a function factorsOf(num) that takes in a number as an arg. 
The method should return an array containing all positive numbers that are able to divide into num with no remainder.

Define this function using function expression syntax.
*/

// 1. Create empty array factorsOfArray
// 2. Declare a loop that goes from 0 to num including num
// 3. Each iteration of loop will push index into factorsOfArray if it is a divisor of num
// 4. Return the factorsOfArray after loop is complete

const factorsOf = function(num) {
  const factorsOfArray = [];
  for (let i = 0; i <= num; i++) {
    let numIsDivisibleByIndex = num % i === 0;
    if (numIsDivisibleByIndex) {
      factorsOfArray.push(i);
    }
  }
  return factorsOfArray;
}

console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]