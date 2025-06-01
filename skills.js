function calculateNumbers(var1, var2) {
    const sum = var1 + var2;
    const difference = var1 - var2;
    const product = var1 * var2;
    const quotient = var1 / var2;

    return {
        sum: sum,
        difference: difference,
        product: product,
        quotient: quotient
    };
}
function displayResults(results) {
    console.log("Sum:", results.sum);
    console.log("Difference:", results.difference);
    console.log("Product:", results.product);
    console.log("Quotient:", results.quotient);
}
function main() {
    const num1 = 10;
    const num2 = 5;

    const results = calculateNumbers(num1, num2);
    displayResults(results);
}
main();
// Exporting functions for testing or further use
module.exports = {
    calculateNumbers,
    displayResults,
    main
};
// This code defines a simple calculator that performs basic arithmetic operations
// on two numbers and displays the results. The main function initializes the numbers
// and calls the calculation and display functions. The code is modular, allowing for
// easy testing and reuse of the functions in other parts of an application.
// The code is structured to be clear and maintainable, with each function having a single responsibility.
// The calculateNumbers function performs the arithmetic operations and returns an object
// containing the results. The displayResults function takes this object and logs the results to the console.
// The main function orchestrates the flow by calling the other functions in sequence.
// The code is designed to be easily extendable, allowing for additional operations or features
// to be added in the future without significant changes to the existing structure.
// The code is written in JavaScript and can be run in any environment that supports JavaScript, such as Node.js or a web browser.
// The code is also structured to be easily testable, with each function being independent