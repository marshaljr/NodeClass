// 10. Prime Number Checker
// Write a function that determines whether a number is prime or not.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2)); // Output: true
console.log(isPrime(3)); // Output: true
console.log(isPrime(4)); // Output: false
console.log(isPrime(17)); // Output: true
console.log(isPrime(25)); // Output: false
console.log(isPrime(0)); // Output: false
console.log(isPrime(1)); // Output: false
console.log(isPrime(-5)); // Output: false
