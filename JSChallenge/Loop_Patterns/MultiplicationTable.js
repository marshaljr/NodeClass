// 3. Multiplication Table
// Create a program that displays the multiplication table of a given number up to 10.

const enteredNum = Number(process.argv[2]);

function multiplicationTable(num) {
  let result;
  if (isNaN(num)) {
    console.log("Please enter a valid number.");
  } else {
    console.log(`Multiplication Table of ${num}:`);
    for (let i = 1; i <= 10; i++) {
      result = num * i;
      console.log(`${num} x ${i} = ${result}`);
    }
  }
}
multiplicationTable(enteredNum);
