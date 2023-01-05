/*
Write a function greatestFactorArray that takes in an array of numbers and returns a new array where every even number is replaced with it's greatest factor. 
A greatest factor is the largest number that divides another with no remainder. For example, the greatest factor of 16 is 8. 
(For the purpose of this problem we won't say the greatest factor of 16 is 16, because that would be too easy).
*/

// 1. Create a new empty array greatestFactors
// 2. Loop through the argument array
// 3. For each element, divide all numbers starting from element - 1 to see if they have a remainder 0
// 4. Push all remainder 0 divisors into the greatestFactors array and return it

function greatestFactorArray(array) {
  const greatestFactors = [];
  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    let divisor = currentNumber - 1;

    while (divisor > 0) {
      if (currentNumber % divisor === 0) {
        greatestFactors.push(currentNumber);
        break;
      }
      divisor--;
    }
  }
  return greatestFactors;
}

console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]