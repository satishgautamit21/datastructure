// Input:
// "Hello World"

// Output:
// 3

// Explanation:
// Vowels present → e, o, o (count = 3)

// If case-insensitive:
// Input: "AEIOUxyz" → Output: 5


// Time complexity is O(n * 5) ~ O(n)
function countVowel(str){
    const vowels = ['a','e','i','o', 'u'];
    let count =0;
    for(let char of str){
        if(vowels.includes(char)) count++; // every character is checked 5 times
    }
    return count;
}

// optimized solution
// Time complexity is O(n * 1) ~ O(n)
function countVowel(str){
    const set = new Set(['a','e','i','o', 'u']);
    let count =0;
    for(let char of str){
        if(set.has(char)) count++; // has is efficient. O(1)
    }
    return count;
}

console.log("vowel count", countVowel('ramayan'));