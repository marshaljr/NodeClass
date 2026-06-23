// 10. Reverse a Number
// Write a function to reverse a number using loops.
// Example:
// reverseNumber(1234);
// Output:
// 4321

function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reversed;
}

console.log(reverseNumber(1234)); // Output: 4321
console.log(reverseNumber(5678)); // Output: 8765
