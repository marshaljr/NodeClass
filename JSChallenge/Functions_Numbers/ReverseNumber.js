// 9. Reverse a Number
// Create a function that reverses a given number.

function reverseNumber(num) {
  let reversedNum = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return reversedNum;
}

console.log(reverseNumber(12345)); // Output: 54321
console.log(reverseNumber(9876)); // Output: 6789
console.log(reverseNumber(1000)); // Output: 1
console.log(reverseNumber(0)); // Output: 0
console.log(reverseNumber(-1234)); // Output: -4321
