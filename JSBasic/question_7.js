// 7. Sum of First N Numbers
// Write a function that finds the sum of numbers from 1 to N.
// Example:
// sumN(5);
// Output:
// 15

function sumN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumN(6)); // Output: 21
