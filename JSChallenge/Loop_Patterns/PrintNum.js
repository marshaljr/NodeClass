// 1. Print Numbers
// Write a function that accepts a number n and prints all numbers from 1 to n.

// Declared a variable to store the number entered by the user from the command line arguments. The function `printNum` takes this number as an argument and uses a for loop to iterate from 1 to n, printing each number to the console. Finally, the function is called with the entered number as its argument.
const enteredNum = Number(process.argv[2]); //Here is 3 argument passed from the command line. First is for node path, sencond is for the file path, and third is for the number entered by the user.

function printNum(enteredNum) {
  for (let i = 1; i <= enteredNum; i++) {
    console.log(i);
  }
}
printNum(enteredNum);
