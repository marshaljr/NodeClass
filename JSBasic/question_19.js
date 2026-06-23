// 19. Number Triangle
// Print:
// 1
// 12
// 123
// 1234
// 12345

function printNumberTriangle(size) {
  for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}

printNumberTriangle(5); // This will print a number triangle pattern.
