/* 
Write a function abbreviateWords(sentence) that takes in a sentence string. 
The function should return a new sentence where words that are longer than 4 characters have their vowels removed. 
Hint: Consider creating a helper function to remove all vowels in a string.
*/

function abbreviateWords(sentence) {
  // Split the sentence into words
  const words = sentence.split(' ');

  // Process each word
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      words[i] = removeVowels(words[i]);
    }
  }

  // Join the words back into a sentence
  return words.join(' ');
}

function removeVowels(word) {
  const vowels = 'aeiouAEIOU';
  let result = '';

  for (let i = 0; i < word.length; i++) {
    if (!vowels.includes(word[i])) {
      result += word[i];
    }
  }

  return result;
}

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message')); // she snds an xcllnt mssg