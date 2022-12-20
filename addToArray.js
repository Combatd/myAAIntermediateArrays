// 1. Create conditionals for branching into different logic based on "location" argument input
// 2. Mutate by push, pop, unshift, and shift to the array directly in each branching logic
// 3. No return value, simply mutate the original array without creating new data structures


function addToArray(location, element, arr) {
location = location.toUpperCase();
  if(location === 'FRONT') {
    arr.unshift(element);
  } else if (location === 'BACK') {
    arr.push(element);
  } else {
    console.log('ERROR');
  }
}

testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]
