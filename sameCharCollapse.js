/*
Write a function sameCharCollapse that takes in a string and returns a collapsed version of the string. 
To collapse the string, we repeatedly delete 2 adjacent characters that are the same until there are no such adjacent characters. 
If there are multiple pairs that can be collapsed, delete the leftmost pair. 
For example, we take the following steps to collapse "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy
*/

function deleteAdjacentCharacters(str) {
  // initialize a stack
  const characterStack = [];
  // push characters into the stack that don't match an adjacent, popping out matching ones
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i]
    if (characterStack.length > 0 && characterStack[characterStack.length - 1] === currentChar) {
      characterStack.pop();
    } else {
      characterStack.push(currentChar);
    }
  }
  // join the stack into a new string
  let collapsedString = characterStack.join('');
  // return the new string
  return collapsedString;
}

function sameCharCollapse(str) {
  // split a string into an array of words
  const wordsArray = str.split(' ');
  // loop through, deleting two adjacent characters that are the same
  for (let i = 0; i < wordsArray.length; i++) {
    let currentWord = wordsArray[i];
    let newWord = deleteAdjacentCharacters(currentWord);
    wordsArray[i] = newWord;
  }
  // join the array back into a string, returning a modified string
  let collapsedSentence = wordsArray.join(' ');
  return collapsedSentence;
}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv