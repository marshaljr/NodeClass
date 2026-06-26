// 6. Pyramid Star Pattern
// Print the following pattern:
//    *
//    ***
//   *****
//  *******
// *********

const rows = 5;

for (let i = 1; i <= rows; i++) {
  let row = "";
  // Print spaces
  for (let j = 1; j <= rows - i; j++) {
    row += " ";
  }
  // Print stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }
  console.log(row);
}
