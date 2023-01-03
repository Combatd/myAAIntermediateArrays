/*
Write a function commonFactors that accepts two numbers as arguments. 
The function should return an array containing positive numbers that are able to divide both arguments.
*/

// 1. Instantiate empty array to have common factors.
// 2. Check and put into new array every number up to both numbers that divide by both numbers
// 3. Return the array 

function commonFactors(num1, num2) {
  const commonFactors = [];
  let longestNumber = num1;
  if (num2 > num1) longestNumber = num2;
  // don't include 0 as factor
  for (let i = 1; i < longestNumber; i++) {
    let isFactorOfNum1 = num1 % i === 0;
    let isFactorOfNum2 = num2 % i === 0;
    if (isFactorOfNum1 && isFactorOfNum2) {
      commonFactors.push(i);
    }
  }
  return commonFactors;
}

console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]