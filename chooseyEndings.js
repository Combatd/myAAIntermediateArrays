/*
Write a function chooseyEndings that accepts an array of words and a suffix string as arguments. 
The function should return a new array containing the words that end in the given suffix. 
If the value passed in is not an array, return an empty array.
*/

// 1. Intialize a new empty array for suffix words
// 2. Use String.prototype.endsWith to check each word for the suffix in the words array
// 3. Put every suffix matched word into the new array
// 4. Return the new array

function chooseyEndings(words, suffix) {
  const suffixWords = [];
  let index = 0;
  while (index < words.length) {
    if (words[index].endsWith(suffix)) {
      suffixWords.push(words[index]);
    }
    index++;
  }
  return suffixWords;
}

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]