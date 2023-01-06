/*
Write a function rotateRight(array, num) that takes in an array and a number as args. 
The function should return a new array where the elements of the array are rotated to the right num times. 
The function should not mutate the original array and instead return a new array.

Define this function using function expression syntax.
*/

// 1. Create a copy of the original array
// 2. Loop through the array copy to pop elements from the end and unshift to the beginning
// 3. Return the mutated copy array

const rotateRight = function(array, num) {
  let copy = array.slice(); // spread operator could have also worked here
  let index = 0;
  while (index < num) {
    let element = copy.pop();
    copy.unshift(element);
    index++;
  }
  return copy;
}

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]