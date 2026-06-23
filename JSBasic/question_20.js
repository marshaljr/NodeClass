// 20. Pyramid Pattern
// Print:
//     *
//    ***
//   *****
//  *******
// *********

function printPyramidPattern(size) {
  for (let i = 1; i <= size; i++) {
    let row = "";
    // Print leading spaces
    for (let j = 1; j <= size - i; j++) {
      row += " ";
    }
    // Print stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}

printPyramidPattern(5); // This will print a pyramid pattern of asterisks.
