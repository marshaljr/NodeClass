// 6. Print Numbers 1–100
// Use a loop to print numbers from 1 to 100.

function printNumbers() {
  const numbers = [];

  for (let i = 1; i <= 100; i++) {
    console.log(i);
    numbers.push(i);
  }
  return numbers;
}

printNumbers(); // This will print numbers from 1 to 100 in the console.
