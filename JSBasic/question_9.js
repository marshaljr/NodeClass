// 9. Count Digits
// Write a function that counts the number of digits in a number.
// Example:
// countDigits(98765);
// Output:
// 5

function countDigits(number) {
  let count = 0;
  while (number !== 0) {
    number = Math.floor(number / 10);
    count++;
  }
  return count;
}
console.log(countDigits(98765)); // Output: 5
console.log(countDigits(1234567890)); // Output: 10
