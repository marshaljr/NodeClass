// 2. Even or Odd
// Create a function that checks whether a number is even or odd.
// Example:
// checkEvenOdd(7);
// Output:
// Odd

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return `${num} is Even`;
  } else {
    return `${num} is Odd`;
  }
}

console.log(checkEvenOdd(7));
console.log(checkEvenOdd(10));
