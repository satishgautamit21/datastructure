// Pattern used Two pointer
// Time and Space complexity is O(n)
// because we are using two pointer and traversing the 
// string once and space complexity is O(n) because we are 
// creating a new array to store the reversed string
function getreverse(str){
    let strArr = [...str];
    let first = 0;
    let last = str.length -1;
    while(first<last){
        const temp = strArr[first];
        strArr[first] = strArr[last];
        strArr[last] = temp;

        first++;
        last--;
    }
    return strArr.join('');
}

// Pattern used Two pointer
// Using Destructuring assignment
// Time and Space complexity is O(n)
function getreverse(str){
    let strArr = [...str];
    let first = 0;
    let last = str.length -1;
    while(first<last){
        [strArr[first], strArr[last]] = [strArr[last], strArr[first]];
        first++;
        last--;
    }
    return strArr.join('');
}

// Using builtin method
function getreverseWithBuiltInMethod(str){
    const reversed = [...str].reverse().join('');
    return reversed;
}

console.log("reversed str is", getreverse("mango"));
console.log("reversed str is", getreverse("ramaya"));