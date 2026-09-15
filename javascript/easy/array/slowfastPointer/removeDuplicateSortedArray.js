function removeDuplicatesfromSortedArray(nums) {
    if (nums.length === 0) return 0;
    let slow = 0; // Pointer for the unique elements
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast]; // Move the unique element to the next position
        }
    }
    return slow + 1; // Length of the unique elements
}