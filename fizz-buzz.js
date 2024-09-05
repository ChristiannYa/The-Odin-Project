// PROMPT: Write a program that takes a user's input and prints out the numbers from one to the number the user entered. However, for multiples of three, print Fizz instead of the number and for multiples of five, print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

// PSEUDOCODE: 
// 1. When a user inputs a number
// 2. Loop from one to the entered number
// 3. If the current number is divisible by 3, then print "Fizz"
// 4. If the current number is divisible bt 5, then print "Buzz"
// 5. If the current number is divisible by both 3 and 5, then print "FizzBuzz"
// 6. Otherwise, print the current number

/* LONG VERSION

const prompt = require("prompt-sync")({ sigint: true });
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
*/

const prompt = require("prompt-sync")({ sigint: true });
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
    console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
}