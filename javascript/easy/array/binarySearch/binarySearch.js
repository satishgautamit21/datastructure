function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found at index mid
        }

        if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        }

        else {
            right = mid - 1; // Search in the left half
        }

    }

    return -1; // Target not found
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = binarySearch(arr, target);
console.log(`Target ${target} found at index:`, result);

const target2 = 10;
const result2 = binarySearch(arr, target2);
console.log(`Target ${target2} found at index:`, result2);