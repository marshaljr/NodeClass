// 3. Largest of Three Numbers
// Write a function that accepts three numbers and returns the largest.
// Example:
// largest(10, 25, 15);
// Output:
// 25

function largestNum(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return console.log(num1, "is the largest");
  } else if (num2 >= num1 && num2 >= num3) {
    return console.log(num2, "is the largest");
  } else {
    console.log(num3, "is the largest");
  }
}
largestNum(3, 40, 5);
largestNum(10, -25, -15);
