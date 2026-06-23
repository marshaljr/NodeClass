// 14. Find the Largest Number in an Array
// Write a function that returns the largest element from an array.
// Example:
// findLargest([5, 9, 2, 15, 7]);
// Output:
// 15

function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([5, 9, 2, 15, 7])); // Output: 15
console.log(findLargest([-3, -1, -7, -4])); // Output: -1
