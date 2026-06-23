// 8. Multiplication Table
// Write a function that prints the multiplication table of a given number.
// Example:
// table(5);
// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

function table(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

table(7); // This will print the multiplication table of 5 in the console.
