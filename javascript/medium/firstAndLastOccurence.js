/*
  Find the first and last position of a target value in a sorted array.

  We use Binary Search twice:
  1. First Binary Search:
     - When we find the target, store its index as `first`.
     - Continue searching on the LEFT side to see if the target appears earlier.

  2. Second Binary Search:
     - When we find the target, store its index as `last`.
     - Continue searching on the RIGHT side to see if the target appears later.

  Time Complexity: O(log n)
  Space Complexity: O(1)

  Example:
  [1, 2, 2, 2, 3, 4], target = 2
  Output: [1, 3]
*/

function findFirstAndLastOccurrence(arr, target) {
    let first = -1;
    let last = -1;
    // Find first occurrence
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            first = mid;
            right = mid - 1; // Continue searching in the left half
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Find last occurrence
    left = 0;
    right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            last = mid;
            left = mid + 1; // Continue searching in the right half
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return [first, last];
}

console.log(findFirstAndLastOccurrence([1, 2, 2, 2, 3, 4], 2)); // Output: [1, 3]
console.log(findFirstAndLastOccurrence([1, 2, 3, 4, 5], 6)); // Output: [-1, -1]
console.log(findFirstAndLastOccurrence([1, 1, 2, 1, 1], 2)); // Output: [2, 2]