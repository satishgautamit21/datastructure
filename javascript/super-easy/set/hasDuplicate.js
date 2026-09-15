// clean version
function checkForDuplicates(arr) {
  const uniqueElements = new Set(arr);
  return uniqueElements.size !== arr.length;
}

// optimized version
function checkForDuplicates(arr) {
  const seen = new Set();
    for (const item of arr) {
        if (seen.has(item)) {
            return true;
        }
        seen.add(item);
    }
    return false;
}