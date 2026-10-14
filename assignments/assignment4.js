// Assignment 4: Loop Control Structures

// Print the multiplication table of 5, from 1 to 5.
console.log("-- Multiplication Table of 5 --");

for (let multiplier = 1; multiplier <= 5; multiplier++) {
    console.log("5 x " + multiplier + " = " + (5 * multiplier));
}

// Find the first number greater than 10 that is divisible by 6.
console.log("\n-- First number > 10 divisible by 6 --");

let numberToCheck = 11;

while (true) {
    if (numberToCheck > 10 && numberToCheck % 6 === 0) {
        console.log("Found: " + numberToCheck);
        break;
    }

    numberToCheck++;
}

// Show how continue skips selected numbers in a do...while loop.
console.log("\n-- do...while with continue --");

let counter = 0;

do {
    counter++;

    if (counter === 2 || counter === 4) {
        continue;
    }

    console.log("Printed: " + counter);
} while (counter < 5);
