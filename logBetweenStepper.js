/*
Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters. 
The function should print out numbers between min and max at step intervals. See the following examples.
*/

// 1. Create a loop that begins at min and stops at max
// 2. Print out index at each iteration and increase index by step value
// 3. No return value after printing out each number from min to max

function logBetweenStepper(min, max, step) {
  let index = min;
  while (index <= max) {
    console.log(index);
    index = index + step;
  }
}

logBetweenStepper(5, 9, 1);
logBetweenStepper(-10, 15, 5)