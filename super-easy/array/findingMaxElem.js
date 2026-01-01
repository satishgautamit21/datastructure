function findingMax(arr) {
    let max = -Infinity;
    for (let item of arr){
        if(max < item) max=item;
    }
    return max;
}

console.log("max is ", findingMax([1,4,7,34,-90,-1]));