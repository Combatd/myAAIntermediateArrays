/*
Write a function fibonacciSequence that accepts a number as an argument. 
The function should return an array representing the fibonacci sequence up to the given length. The first and second numbers of the sequence are 1 and 1. To generate subsequent numbers of the sequence, 
we take the sum of the previous two numbers of the sequence.
*/

// 1. Create array for storing fibonacci numbers
// 2. Loop up to the number argument adding the sum of the previous 2 numbers to the array
// 3. Return array of fibonacci numbers

function fibonacciSequence(number) {
  if (number < 1) return [];
  if (number === 1) return [1];
  const fibArray = [1,1];
  for (let i = 2; i < number; i++) {
    let sumOfPrevTwo = fibArray[i - 1] + fibArray[i - 2];
    fibArray.push(sumOfPrevTwo);
  }
  return fibArray;
}

console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]