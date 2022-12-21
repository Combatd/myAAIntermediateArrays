/*
Write a function yeller(words) that takes in an array of words. 
The function should return a new array where each element of the original array is yelled.
*/

// 1. Copy (slice) the original array
// 2. Loop through the array copy to capitalize and append an ! exclamation to each element
// 3. Return the array copy

function yeller(words) {
  let capitalWords = words.slice(0);
  for (let i = 0; i < capitalWords.length; i++) {
    capitalWords[i] = capitalWords[i].toUpperCase() + '!';
  }
  return capitalWords;
}

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]