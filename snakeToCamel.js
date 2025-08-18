/*
Write a function snakeToCamel that takes in a snake_cased string and returns a PascalCased version of the string. 
snake_case is where each word is separated with underscores (_). PascalCase is a string where the first char of each word is capital, all other chars lowercase.
*/

function snakeToCamel(snakeCaseStr) {
    let words = snakeCaseStr.split('_'); // Split the string by underscores
    let pascalCaseArray = []; // Initialize an array to hold the PascalCase words

    for (let i = 0; i < words.length; i++) {
        let word = words[i]; // Get the current word
        if (word) { // Check if the word is not empty
            // Capitalize the first letter and make the rest lowercase
            let pascalWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            pascalCaseArray.push(pascalWord); // Add the formatted word to the array
        }
    }

    return pascalCaseArray.join(''); // Join the array into a single string
}



console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'