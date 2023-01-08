/*
Write a function longestWord(sentence) that takes in a sentence string as an argument. 
The function should return the longest word in the sentence. 
If there is more than one "longest word", return the first of these instances.
*/

// 1. Create empty string to store longest word
// 2. Split array by spaces
// 3. Loop and count characters of each element, reassigning longest word value if longer than previous longest word
// 4. Return the longest string

function longestWord(sentence) {
  let longest = '';
  const wordsArray = sentence.split(' ');
  for (let i = 0; i < wordsArray.length; i++) {
    let currentWord = wordsArray[i];
    if (currentWord.length > longest.length) {
      longest = currentWord;
    }
  }
  return longest;
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''