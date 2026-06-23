// 12. Prime Number Checker
// Write a function that checks whether a number is prime.
// Example:
// isPrime(13);
// Output:
// Prime

function isPrime(num) {
  if (num <= 1) {
    return "Not Prime";
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return "Not Prime";
    }
  }
  return "Prime";
}

console.log(isPrime(13)); // Output: Prime
console.log(isPrime(15)); // Output: Not Prime
console.log(isPrime(2)); // Output: Prime
console.log(isPrime(1)); // Output: Not Prime
console.log(isPrime(0)); // Output: Not Prime
console.log(isPrime(-5)); // Output: Not Prime
