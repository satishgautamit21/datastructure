/**
 * Here logic woluld be to use binary search to find the target value in the sorted array. 
 * If the target is found, return its index. If not found, return the index where it would 
 * be inserted to maintain the sorted order.
 */
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Target found at index mid
        }
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left; // Target not found then return 1st position as insertion position
}