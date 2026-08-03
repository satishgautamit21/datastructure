function missingNumber(arr){
    const n = arr.length;
    let sum = (n*(n+1))/2;
    for(let item of arr){
        sum = sum - item;
    }
    return sum;
}

console.log(" missing number is", missingNumber([0,1,2,3,5,6,7]))