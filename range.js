// 1. create empty array
// 2. loop through starting at the min, iteratively pushing each number until the max is pushed into the array
// 3. Return the array

function range(min, max) {
  const rangeArray = [];
  let index = min;
  while (index <= max) {
    rangeArray.push(index);
    index++;
  }

  return rangeArray;
}


console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []