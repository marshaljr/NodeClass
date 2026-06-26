// 7. Even or Odd Checker
// Create a function that checks whether a given number is even or odd.

function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOrOdd(8)); // Even
console.log(evenOrOdd(15)); // Odd
console.log(evenOrOdd(0)); // Even
console.log(evenOrOdd(-6)); // Even
console.log(evenOrOdd(-7)); // Odd
