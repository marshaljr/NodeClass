// 17. Right Triangle Star Pattern
// Print:
// *
// **
// ***
// ****
// *****

function printRightTrianglePattern(size) {
  for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

printRightTrianglePattern(8); // This will print a right triangle pattern of asterisks.
