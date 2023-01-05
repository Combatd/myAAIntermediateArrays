/*
Write a function summationSequence that takes in two numbers: start and length. 
The function should return an array containing length total elements. 
The first number of the sequence should be the start number. At any point, to generate the next element of the sequence we take the summation of the previous element. 
You can assume that length is not zero.
*/

// 1. Create an empty array summations
// 2. Create a loop that begins with start and ends with length (length included)
// 3. Each iteration of loop will add a number that is the current number plus previous summation numbers in summations
// 4. Return the array with summations

function summationSequence(start, length) {
  const summations = [start];
  for (let i = summations.length; i < length; i++) {
    let sum = 0;
    let prevSummation = summations[summations.length - 1];

    for (let j = 1; j <= prevSummation; j++) {
        sum += j;
    }
    
    summations.push(sum);
  }
  return summations;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]