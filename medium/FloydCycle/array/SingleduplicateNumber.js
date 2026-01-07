// Leet code 287

/*
    Example 1:

    Input: nums = [1,3,4,2,2]
    Output: 2
    Example 2:

    Input: nums = [3,1,3,4,2]
    Output: 3
    Example 3:

    Input: nums = [3,3,3,3,3]
    Output: 3
*/
function singleDuplicate(arr){
    let obj = {};
    for(let item of arr){
        obj[item] = obj[item]? obj[item]+1 : 1
    }
    for(let item of arr){
        if(obj[item]==2) return item
    }
    return -1;
}

// Set based solution
function singleDuplicate(arr){
    let seen = new Set();
    for(let item of arr){
        if(seen.has(item)) return item;
        seen.add(item);
    }
    return -1;
}

// Floyd cycle detection plroblem
// Applicable only when 
// number are in range 1...n
// size of array is n+1
// when space complexity is asked for O(1)
// clearly mentioned only one duplicate exist
function findDuplicate(arr) {
    let slow = arr[0];
    let fast = arr[0];

    // Phase 1: detect cycle
    while (true) {
        slow = arr[slow];
        fast = arr[arr[fast]];

        if (slow === fast) break;
    }

    // Phase 2: find entry point
    slow = arr[0];  // reset slow
    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    }

    return slow;
}



console.log("find single duplicate", singleDuplicate([1,4,6,1,5]))