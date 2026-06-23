// 13. Count Vowels
// Write a function that counts vowels in a given string.
// Example:
// countVowels("javascript");
// Output:
// 3

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("javascript")); // Output: 3
console.log(countVowels("hello world")); // Output: 3
console.log(countVowels("AEIOU")); // Output: 5
console.log(countVowels("xyz")); // Output: 0
