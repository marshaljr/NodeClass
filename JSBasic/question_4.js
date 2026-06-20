// 4. Leap Year Checker
// Write a function to determine whether a given year is a leap year.
// Example:
// isLeapYear(2024);
// Output:
// Leap Year

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a Leap Year`;
  } else {
    return `${year} is not a Leap Year`;
  }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
