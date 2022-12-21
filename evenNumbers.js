// 1. Create a loop that starts at 2 and ends at max
// 2. Create an empty array called evenArray
// 2. In each loop iteration, if the index is divisible by 2, push into a create evenArray
// 3. Return the even array

function evenNumbers(max) {
  const evenArray = [];
  for (let i = 2; i < max; i++) {
    let isNumberEven = i % 2 === 0;
    if (isNumberEven) {
      evenArray.push(i);
    }
  }
  return evenArray;
}

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]