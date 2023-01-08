/*
Write a function shortestWord that accepts a sentence as an argument. 
The function should return the shortest word in the sentence. 
If there is a tie, return the word that appears later in the sentence.
*/

// 1. Declare shortest variable to store shortest word
// 2. Split the sentence into an array of words by space
// 3. Loop from right to left to find shortest word in array
// 4. Return the shortest word

function shortestWord(sentence) {
  const wordsArray = sentence.split(" ");
  let shortest = wordsArray[wordsArray.length - 1];
  for (let i = wordsArray.length - 1; i >= 0; i--) {
    let currentWord = wordsArray[i];
    if (shortest.length > currentWord.length) {
      shortest = currentWord;
    } 
  }

  return shortest;
}

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy')); // 'do'