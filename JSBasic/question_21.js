// A. FizzBuzz
// Print numbers from 1–100:
// Multiples of 3 → "Fizz"
// Multiples of 5 → "Buzz"
// Multiples of both → "FizzBuzz"

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(); // This will print the FizzBuzz sequence from 1 to 100.
