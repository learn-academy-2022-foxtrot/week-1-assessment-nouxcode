// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
// In order to create the code that determines if a given number is below boiling point, at boiling point, or above boiling point I will first need to establish the variable with the value of what is considered the boiling point. 
//In this case, the boiling point variable will be valued at 212 degrees fahrenheit. 
//I will write an "if" statement for below boiling point, an "else if" statement for at boiling point, and a seperate "else if" statement if the test variable is above boiling point. 
//Each "if", and "else if" statement will be followed by a "console.log" and in parenthesis I will designate each boiling level.


const temp = 42
// Expected output: "42 is below boiling point"

// const temp = 350
// Expected output: "350 is above boiling point"

// const temp = 212
// Expected output: "212 is at boiling point"

if (temp < 212) {
    console.log(`${temp}° is below the boiling point!`);
  } else if (temp === 212) {
    console.log(`${temp}° is at the boiling point!`);
  } else if (temp > 212) {
    console.log(`${temp}° is above the boiling point!`);

// END RESULT:
//All good after running node in the terminal. Expect output generated.

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
// In order to create the code that will combine the two arrays and return the length using the test variables provided below I will need to utilize the .concat() method to merge the two arrays. 
//By doing this the original array(s) is unchanged and just combined. 
//I will use the "let" command to establish each array to designate the Padres 1984, and Padres 1988 World Series Runs, and then use the "console.log" command in conjuction with the .concat command followed by the .length. 
//Afterwards I will use "comboArrays" to establish the variable for the combined arrays.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

let padresTotalRuns = padres1984WorldSeriesRuns.concat(
    padres1998WorldSeriesRuns
  ).length;
  console.log(padresTotalRuns)

// END RESULT:
//All good after running node in the terminal. Expect output generated.



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
// In order to create the code that will reverse the letters of a string using the test variable providied below, I will need to utilize the .reverse() method following my the currentCohort variable.

const currentCohort = "Foxtrot 2022"
// Expected output: "2202 tortxoF"

//console.log(currentCohort.reverse())


// END RESULT:
// When I ran node in the terminal it rendered that .reverse() is not a function, I'm not sure as to why after troubleshooting.
// I posted the issue I was experiecing in Slack and a few classmates and an instructor were about to help me troubleshoot further, here is the code that eventually became successful for me:

console.log(currentCohort.split("").reverse().join(""))

// END RESULT:
//All good after running node in the terminal. Expect output generated.

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
// In order to create the code that will return the last index of the given value from the array using the test variables provided below I use the .lastIndexOf method following the "console.log" command.
//Followinf the "console.log" command I will put in parenthesis "myNumbers.lastIndexOf" and then within that I will put in another set of parenthesis "givenValue1"

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

console.log(myNumbers.lastIndexOf(givenValue1))

// END RESULT:
//All good after running node in the terminal. Expect output generated.

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
// In order to create the code that will sort all the numbers in an array from largest to smallest using the test variables I will utilize the ".sort()" method.
//I will need to provide the method with an argument since the ".sort()" doesn't work correctly without the aide of an argument.
//In this case I will also utilize the ".reverse()" method

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
console.log(sanDiegoSummerTemperatures.sort().reverse())


const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
console.log(sanDiegoWinterTemperatures.sort().reverse())
  }
// END RESULT:
//All good after running node in the terminal. Expect output generated.