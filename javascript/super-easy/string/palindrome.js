// palindrome string

function checkPalindrome(str){
    let first = 0;
    let last = str.length-1;

    while(first<last){
        if(str[first]!==str[last]){
          return false
        }
        first++;
        last--;
    }
    return true;
}

// Using builtin method
function checkPalindromeBuiltInMethod(str){
    return str === [...str].reverse().join('');;
}

console.log("isPalindrome", checkPalindrome("eye"));
console.log("isPalindrome", checkPalindrome("bat"));

