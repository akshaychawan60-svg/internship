// Assignment 2: Operators, Expressions, and Input Handling

// Ask the user for the bill amount and tip percentage.
const billText = prompt("Enter the bill amount, for example 100:");
const tipText = prompt("Enter the tip percentage, for example 15:");

// Convert the text entered by the user into numbers.
const billAmount = Number(billText);
const tipPercentage = Number(tipText);

// Check whether the entered values are valid.
if (
    billText === null ||
    tipText === null ||
    billText.trim() === "" ||
    tipText.trim() === "" ||
    !Number.isFinite(billAmount) ||
    !Number.isFinite(tipPercentage) ||
    billAmount < 0 ||
    tipPercentage < 0
) {
    console.log("Please enter valid, non-negative numbers.");
} else {
    // Calculate the tip and add it to the bill.
    const tipAmount = billAmount * tipPercentage / 100;
    let totalAmount = billAmount;
    totalAmount += tipAmount;

    console.log("Subtotal: $" + billAmount);
    console.log("Tip Percentage: " + tipPercentage + "%");
    console.log("Calculated Tip: $" + tipAmount);
    console.log("Total Amount to Pay: $" + totalAmount);
}
