// C. Palindrome Number
// Check if a number reads the same forwards and backwards.
// Example:
// 121
// Output:
// Palindrome

function isPalindrome(num) {
  const strNum = num.toString(); // Convert the number to a string
  const reversedStrNum = strNum.split("").reverse().join(""); // Reverse the string
  if (strNum === reversedStrNum) {
    console.log("Palindrome");
  } else {
    console.log("Not a Palindrome");
  }
}

// Example usage:
const numberToCheck = Number(process.argv[2]); // Get the number from command line arguments
isPalindrome(numberToCheck);
