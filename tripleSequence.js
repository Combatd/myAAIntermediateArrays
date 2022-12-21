// 1. Create an array that starts with the base as first element
// 2. Create a loop that runs by times length (exponent)
// 3. Each iteration of loop will multiply the base by 3 the previous number (as each subsequent element is multiplied by 3)
// 4. Return the array

function tripleSequence(start, length) {
  const tripledNumbers = [start];
  let index = 1;
  while (index < length) {
    let previousNumber = tripledNumbers[tripledNumbers.length - 1]; // the previous number in the tripling sequence
    let tripledNumber = previousNumber * 3;
    tripledNumbers.push(tripledNumber);
    index++;
  }
  return tripledNumbers;
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]