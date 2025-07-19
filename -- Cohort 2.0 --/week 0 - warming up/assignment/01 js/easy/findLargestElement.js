/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (numbers.length == 0) return undefined;

  let maximum = -Infinity;

  for (const num of numbers) {
    maximum = Math.max(maximum, num);
  }

  return maximum;
}

module.exports = findLargestElement;
