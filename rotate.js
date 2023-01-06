/*
Write a function rotate(array, num) that takes in an array and a number as args. 
When the num is positive, the elements of the array should be rotated to the right. 
When the num is negative, the elements of the array should be rotated to the left. 
The function should mutate the original array.

Define this function using function expression syntax.
*/

// 1. Create separate conditions to loop array elementsbased on num argument being positive and negative
// 2. Num positive: rotate the array right by popping elements at the end and unshifting them to the beginning
// 3. Num negative: rotate the array left by shifting elements at the start and pushing them at the end
// 4. Return the mutated array

const rotate = function(array, num) {
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      let poppedElement = array.pop();
      array.unshift(poppedElement);
    }
  } else {
    for (let i = num; i < 0; i++) {
      let shiftedElement = array.shift();
      array.push(shiftedElement);
    }
  }
  return array;
}

let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]