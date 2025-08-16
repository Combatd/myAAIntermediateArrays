/*
Write a function reverseSentence(sentence) that takes in a sentence as an arg. 
The function should return a new sentence where the order of the words is reversed. 
Note that you should reverse the order among words, not the order among characters.
*/

function reverseSentence(sentence) {
  // Split the sentence into words using space as a delimiter
  const words = sentence.split(' ');
  
  // Reverse the array of words, as each element is a word
  for (let i = 0, j = words.length - 1; i < j; i++, j--) {
    const temp = words[i];
    words[i] = words[j];
    words[j] = temp;
  }
  
  // Join the reversed array back into a string with spaces as the delimiter
  return words.join(' ');
}


console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'