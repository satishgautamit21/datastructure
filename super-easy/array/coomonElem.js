// using built in function
function getCommonElem(arr1, arr2){
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    return [...set1.intersection(set2)]
}

function getCommonElem(arr1, arr2){
    const set = new Set(arr1);
    const res = [];
    for(let item of arr2){
        if(set.has(item)) res.push(item)
    }
    return res;
}

console.log('common elem', getCommonElem([1,2,3,4], [3,4,5,6]))