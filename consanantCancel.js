/*
Write a function consonantCancel that takes in a sentence and returns a new sentence 
where every word begins with it's first vowel.
*/

function consonantCancel(sentence) {
  const words = sentence.split(' '); // Split the sentence into words
  const modifiedWords = []; // Initialize an array to hold the modified words
  for (let i = 0; i < words.length; i++) {
    let word = words[i]; // Get the current word
    let modifiedWord = removeFirstConsonants(word); // Remove leading consonants
    modifiedWords.push(modifiedWord); // Add the modified word to the array
  }
  return modifiedWords.join(' '); // Join the words back into a sentence   
}

function removeFirstConsonants(word) {
  const vowels = 'aeiouAEIOU'; // Define vowels for easy checking
  let firstVowelIndex = -1; // Initialize the index of the first vowel found

  // Find the index of the first vowel in the word
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      firstVowelIndex = i;
      break; // Exit the loop once the first vowel is found
    }
  }

  // If a vowel was found, return the substring from the first vowel to the end
  if (firstVowelIndex !== -1) {
    return word.slice(firstVowelIndex);
  } else {
    return word; // If no vowel is found, return the original word
  }
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"