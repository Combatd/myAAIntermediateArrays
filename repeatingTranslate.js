/*
// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

*/

function checkLastVowel(word) {
  const vowels = 'aeiouAEIOU';
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return i; // Return the index of the last vowel found
    }
  }
  return -1; // Return -1 if no vowel is found
}

function repeatingTranslate(sentence) {
  const vowels = 'aeiouAEIOU'; // Define vowels for easy checking

  // Helper function to translate a single word
  function translateWord(word) {
    if (word.length < 3) {
      return word; // Return the word unchanged if it's shorter than 3 characters
    }

    const lastChar = word[word.length - 1];
    let lastVowelIndex = checkLastVowel(word);
    if (lastVowelIndex === -1) {
      return word; // If no vowel is found, return the word unchanged
    } else if (vowels.includes(lastChar)) {
      return word + word; // If the word ends with a vowel, repeat the word twice
    } else {
      const suffix = word.slice(lastVowelIndex); // Get the substring from the last vowel to the end
      return word + suffix; // Append the suffix to the original word
    }
  }

  const words = sentence.split(' '); // Split the sentence into words
  const translatedWords = []; // Initialize an array to hold the translated words
  for (let i = 0; i < words.length; i++) {
    translatedWords.push(translateWord(words[i])); // Translate each word and add it to the array
  }
  return translatedWords.join(' '); // Join the translated words back into a sentence
}

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"