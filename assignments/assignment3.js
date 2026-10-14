// Assignment 3: Conditional Logic Implementation

// The example test score from the assignment guide is 85.
const testScore = 85;
let letterGrade;

// Use if...else to decide the grade.
if (testScore >= 90) {
    letterGrade = "A";
} else if (testScore >= 80) {
    letterGrade = "B";
} else if (testScore >= 70) {
    letterGrade = "C";
} else if (testScore >= 60) {
    letterGrade = "D";
} else {
    letterGrade = "F";
}

// Use switch to print a message about the grade.
switch (letterGrade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Needs Improvement");
        break;
    default:
        console.log("Failing grade");
}

// Use a ternary operator to decide whether the student passed.
const result = testScore >= 40 ? "Passed" : "Failed";

console.log("Score: " + testScore);
console.log("Grade: " + letterGrade);
console.log("Status: " + result);
