/*
Write a function longWords(words) that takes in an array of words. 
The function should return an array containing only the words that are longer than 5 characters.
*/

// 1. Initialize an empty array to hold long words
// 2. Create a loop that will check the length of each word in the words array
// 3. If the word length is more than five characters, push it into the long words array
// 4. Return the array of long words

function longWords(words) {
  const longWordsArray = [];

  for (let i = 0; i < words.length; i++) {
    let currentWordIsLong = words[i].length > 5;
    if (currentWordIsLong) {
      longWordsArray.push(words[i]);
    }
  }
  return longWordsArray;
}

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solsolyanka' ]

// Time: O(n) - Must loop through all the elements of words array with n number of elements
// Space: O(n) - Created a new array data structure with up to n words in it