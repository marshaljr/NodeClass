// 8. Factorial Calculator
// Write a function to calculate the factorial of a given number.

function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(-1)); // Error: Factorial is not defined for negative numbers.
