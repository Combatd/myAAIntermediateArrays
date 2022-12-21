/*
Write a function fizzBuzz(max) that accepts a number as an arg. 
The function should return an array containing all positive numbers less than max that are divisible by either 3 or 5, but not both.
*/

// 1. Create empty array
// 2. Create a loop to run conditional checks from 0 to max
// 3. Create conditional branches to check for valid quotients of divisor 3 and 5
// 4. Push all valid quotients into the array
// 5. Return the array

function fizzBuzz(max) {
  const fizzBuzzArray = [];

  let index = 0;
  while (index < max) {
    let indexIsDivisibleBy3 = index % 3 === 0;
    let indexIsDivisibleBy5 = index % 5 === 0;

    if (indexIsDivisibleBy3 && !indexIsDivisibleBy5 || indexIsDivisibleBy5 && !indexIsDivisibleBy3) {
      fizzBuzzArray.push(index)
    }
    index++;
  }
  return fizzBuzzArray;
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]