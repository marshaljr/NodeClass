// 18. Inverted Triangle Pattern
// Print:
// *****
// ****
// ***
// **
// *

function printInvertedTrianglePattern(size) {
  for (let i = size; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

printInvertedTrianglePattern(5); // This will print an inverted triangle pattern of asterisks.
