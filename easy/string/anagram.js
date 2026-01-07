// **Example**

// **Input:**
// `"listen", "silent"`

// **Output:**
// `true`

// **Explanation:**
// Both strings contain the same characters with the same frequencies.

// ---

// **Input:**
// `"hello", "world"`

// **Output:**
// `false`

function checkAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    let obj1 = {};
    for(let char of str1){
        obj1[char] = obj1[char] ? obj1[char] +1: 1;
    }

    let obj2 ={};
    for(let char of str2){
         obj2[char] = obj2[char] ? obj2[char] +1: 1;
    }
    for(let key in obj1){
        if(!(obj2[key] &&  obj2[key] === obj1[key])) return false;
    }
    return true;
}

// optimized solution
function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const freq = {};

    for (let char of str1) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!freq[char]) return false;
        freq[char]--;
    }

    return true;
}

console.log("is anagram ", checkAnagram("listen", "silent"))
console.log("is anagram ", checkAnagram("list", "lent"))