function validateParenthesis(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (map[last] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// another way with opposite mapping:

function validateParenthesis(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (map[char]) {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }   
        } else {
                stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log(validateParenthesis("()")); // true
console.log(validateParenthesis("()[]{}")); // true
console.log(validateParenthesis("(]")); // false
console.log(validateParenthesis("([)]")); // false
