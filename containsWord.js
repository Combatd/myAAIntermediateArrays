/*
Write a function containsWord(sentence, targetWord) that accepts two strings as args. 
The function should return a boolean indicating whether the targetWord is found inside of the sentence. 
Solve this without using String's indexOf() or includes() methods.
*/

function containsWord(sentence, targetWord) {
  // Split the sentence into words
  const words = sentence.split(' ');

  // Check each word to see if it matches the targetWord
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase(); // Normalize words in array to lowercase
    if (words[i] === targetWord) {
      return true; // Found the targetWord
    }
  }

  return false; // targetWord not found
}

console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false