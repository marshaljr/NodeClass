// 16. Square Pattern
// Print:
// *****
// *****
// *****
// *****
// *****

function printSquarePattern(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += "*";
    }
    console.log(row);
  }
}

printSquarePattern(5); // This will print a 5x5 square pattern of asterisks.
