// Assignment 1: Variables, Data Types, and Console Operations

// Store a name, age, job status, and skills.
var studentName = "Alice";
let studentAge = 25;
const isEmployed = true;
const studentSkills = ["HTML", "CSS", "JavaScript"];

// Print each value and its data type.
console.log("Name: " + studentName + " (Type: " + typeof studentName + ")");
console.log("Age: " + studentAge + " (Type: " + typeof studentAge + ")");
console.log("Is Employed: " + isEmployed + " (Type: " + typeof isEmployed + ")");
console.log("Skills: " + JSON.stringify(studentSkills) + " (Type: " + typeof studentSkills + ")");
