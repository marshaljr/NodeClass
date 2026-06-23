// 15. Fibonacci Series
// Write a function that prints the first N Fibonacci numbers.
// Example:
// fibonacci(7);
// Output:
// 0 1 1 2 3 5 8
// Pattern Questions (16–20)

function fibonacci(n) {
  let a = 0,
    b = 1,
    next;
  let series = [];

  for (let i = 0; i < n; i++) {
    series.push(a);
    next = a + b;
    a = b;
    b = next;
  }

  console.log(series.join(" "));
}

fibonacci(7); // Output: 0 1 1 2 3 5 8
