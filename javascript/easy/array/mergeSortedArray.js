function mergeSortedArray(arr1 , arr2) {
    let i = 0;
    let j = 0;
    const mergedArray = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

console.log(mergeSortedArray([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArray([1], [4, 5, 6])); // [1, 4, 5, 6]
console.log(mergeSortedArray([], [4, 5, 6])); // [4, 5, 6]