// Assignment 5: Function Architecture and Scope

// A regular function uses default values if no arguments are given.
function rectangleArea(length = 5, width = 4) {
    return length * width;
}

// An arrow function calculates the area using the supplied values.
const calculateRectangleArea = (length = 5, width = 4) => {
    return length * width;
};

console.log("Standard Function Area (Default 5x4): " + rectangleArea());
console.log("Arrow Function Area (Custom 10x3): " + calculateRectangleArea(10, 3));

// A variable declared with let inside these braces exists only inside them.
{
    let blockVar = "This variable belongs to this block";
    console.log("Inside the block: " + blockVar);
}

// Trying to use blockVar here causes a ReferenceError.
// try...catch lets us show the error without stopping the program.
try {
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error: " + error.name + ": blockVar is not defined (when accessed outside block)");
}
