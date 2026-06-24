// B. Armstrong Number
// Check whether a number is an Armstrong number.
// Example:
// 153
// Output:
// Armstrong Number

function isArmstrongNumber(num) {
  let sum = 0;
  let temp = num;
  const numDigits = num.toString().length;

  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, numDigits);
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

// Example usage:
const number = 153;
if (isArmstrongNumber(number)) {
  console.log(`${number} is an Armstrong Number`);
} else {
  console.log(`${number} is not an Armstrong Number`);
}
