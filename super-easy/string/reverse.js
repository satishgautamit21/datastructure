// Pattern used Two pointer

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

// Using builtin method
function getreverseWithBuiltInMethod(str){
    const reversed = [...str].reverse().join('');
    return reversed;
}

console.log("reversed str is", getreverse("mango"));
console.log("reversed str is", getreverse("ramaya"));