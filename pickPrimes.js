/*
Write a function pickPrimes that takes in an array of numbers and 
returns a new array containing only the prime numbers.
*/

// 1. Initialize a new empty primesArray
// 2. Loop through argument array
// 3. Each iteration of loop, check all numbers greater than 2 for prime numbers check
// 4. Push prime number elements to primesArray, then return after the loop

function pickPrimes(array) {
  const primesArray = [];
  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    let notPrime = false;
    for (let j = 2; j < currentNumber; j++) {
      if (currentNumber % j === 0) {
        notPrime = true;
        break;
      }
    }
    if (notPrime) continue;
    primesArray.push(currentNumber);
  }
  return primesArray;
}



console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]