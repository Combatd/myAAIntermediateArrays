/*
Write a function initials(name) that accepts a full name as an arg. 
The function should return the initials for that name.
*/

// 1. Split the array by spaces
// 2. Create a new empty string for initials
// 3. Capitalize the first character of each element in array and append it to the initial string
// 4. Return the initial string

function initials(fullName) {
  const separatedName = fullName.split(' ');
  let initialString = '';
  for (let i = 0; i < separatedName.length; i++) {
    let currentString = separatedName[i];
    initialString += currentString[0].toUpperCase();
  }
  return initialString;
}

console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS