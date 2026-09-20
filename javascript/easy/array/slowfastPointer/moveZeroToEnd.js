function moveZeroes(nums) {
    let slow = 0;
    let fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    while (slow < nums.length) {
        nums[slow] = 0;
        slow++;
    }
    return nums;
}

console.log("After moving zeroes to the end:", moveZeroes([0, 1, 0, 3, 12]));