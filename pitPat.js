/*
Write a function pitPat(max) that accepts a number as an arg. 
The function should return an array containing all positive numbers less than or equal to max that are divisible by either 4 or 6, but not both.
*/

// 1. Initialize empty array
// 2. Create a loop that goes up to and including max from 0
// 3. In the loop create conditions to check for quotients of 4 and 6 but not both
// 4. Push valid quotients into the array for each loop iteration
// 5. Return the array of integers

function pitPat(max) {
  const quotients = [];

  for (let i = 0; i <= max; i++) {
    let divisibleBy4 = i % 4 === 0
    let divisibleBy6 = i % 6 === 0;
    if (divisibleBy4 && !divisibleBy6 || divisibleBy6 && !divisibleBy4) {
      quotients.push(i);
    }
  }
  return quotients;
}

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]