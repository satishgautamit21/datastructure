function freqCount(str){
    const obj = {}

    for(let char of str){
        obj[char] = obj[char]? obj[char]+1:1;
    }
    return obj
}

// optimized for scenario where
// asked to count capital small letter same also to ignore spaces
function freqCount(str){
    const obj = {}

    for(let char of str.toLowerCase()){
        if(char === "") continue;
        obj[char] = obj[char]? obj[char]+1:1;
    }
    return obj
}

console.log("frequency of char is ", freqCount("ramayan"));