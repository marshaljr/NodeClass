// 1. Positive, Negative, or Zero
// Write a function that takes a number and prints:
// "Positive" if greater than 0
// "Negative" if less than 0
// "Zero" if equal to 0

function checkNumber(num) {
  if (num < 0) {
    return `${num} is Negative`;
  } else if (num > 0) {
    return `${num} is Positive`;
  } else {
    return `${num} is Zero`;
  }
}

console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));
