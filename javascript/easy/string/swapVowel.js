function swapVowel(str) {
    const stringArray = [...str];

    let left = 0;
    let right = stringArray.length - 1;

    while (left < right) {
        while (left < right && !isVowel(stringArray[left])) {
            left++;
        }
        while (left < right && !isVowel(stringArray[right])) {
            right--;
        }

        [stringArray[left], stringArray[right]] = [stringArray[right], stringArray[left]];
        left++;
        right--;
    }

    return stringArray.join('');
}

function isVowel(char) {
    char = char.toLowerCase();
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    return vowelSet.has(char);
}

console.log(swapVowel("hello")); // Output: "holle"
console.log(swapVowel("leetcode")); // Output: "leotcede"