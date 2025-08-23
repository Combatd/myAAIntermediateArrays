/*
Write a function hipsterfy(sentence) that takes in a sentence string 
and returns the sentence where every word is missing its last vowel.
*/

function hipsterfy(sentence) {
    let words = sentence.split(' '); // Split the sentence into words
    let hipsterfiedWords = []; // Initialize an array to hold the modified words
    const vowels = 'aeiouAEIOU'; // Define vowels for easy checking
    for (let i = 0; i < words.length; i++) {
        let word = words[i]; // Get the current word
        let lastVowelIndex = -1; // Initialize the index of the last vowel found

        // Find the index of the last vowel in the word
        for (let j = word.length - 1; j >= 0; j--) {
            if (vowels.includes(word[j])) {
                lastVowelIndex = j;
                break; // Exit the loop once the last vowel is found
            }
        }

        // If a vowel was found, remove it
        if (lastVowelIndex !== -1) {
            word = word.slice(0, lastVowelIndex) + word.slice(lastVowelIndex + 1);
        }

        hipsterfiedWords.push(word); // Add the modified word to the array
    }
    return hipsterfiedWords.join(' '); // Join the words back into a sentence
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'