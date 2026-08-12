// We use Map because we need to store a value and its corresponding index.
//
// Example:
// value -> index
// 2 -> 0
// 7 -> 1
//
// Map provides efficient O(1) average lookup using:
// map.has(), map.get(), and map.set().
//
// A Set is not suitable because it only stores unique values and cannot
// directly store value-index pairs needed to return the indices.
//
// While a plain object ({}) could also work for numeric keys, Map is generally
// preferred because it is specifically designed for key-value storage and
// avoids prototype-related edge cases.

function gettwoSum(arr, target) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }
    return [-1, -1];
}