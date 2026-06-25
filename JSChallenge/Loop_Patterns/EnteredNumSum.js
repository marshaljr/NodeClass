// 2. Sum of Natural Numbers
// Write a function that calculates the sum of all numbers from 1 to n.

const enteredNum = Number(process.argv[2]);

function sumOfNaturalNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const result = sumOfNaturalNumbers(enteredNum);
console.log(`The sum of natural numbers from 1 to ${enteredNum} is: ${result}`);
