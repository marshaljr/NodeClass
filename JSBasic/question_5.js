// 5. Grade Calculator
// Write a function that accepts marks and returns:
// Marks	Grade
// 90+	A
// 80–89	B
// 70–79	C
// 60–69	D
// Below 60	F
// Loops (6–10)

function gradeCalculator(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 80) {
    return "B";
  } else if (marks >= 70) {
    return "C";
  } else if (marks >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(gradeCalculator(95)); // Output: A
console.log(gradeCalculator(85)); // Output: B
console.log(gradeCalculator(75)); // Output: C
console.log(gradeCalculator(65)); // Output: D
console.log(gradeCalculator(55)); // Output: F
