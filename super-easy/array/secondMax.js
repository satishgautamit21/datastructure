// optimized solution
function getSecondMax(arr){
    let max1 = -Infinity;
    let max2 = -Infinity;
    for (let item of arr){
        if(item > max1) {
            max2=max1;
            max1= item;
        } else if (item < max1 && item > max2 ){
            max2= item;
        }
    }
    return max2;
}


// solution handling single size array or array with all duplicates;
function getSecondMax(arr) {
    if (arr.length < 2) return null;

    let max1 = -Infinity;
    let max2 = -Infinity;

    for (let item of arr) {
        if (item > max1) {
            max2 = max1;
            max1 = item;
        } else if (item < max1 && item > max2) {
            max2 = item;
        }
    }

    return max2 === -Infinity ? null : max2;
}


console.log("2nd max is ", getSecondMax([9,5,3,2,1]));