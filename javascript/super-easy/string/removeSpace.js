// Example

// Input:
// "Hello World from JS"

// Output:
// "HelloWorldfromJS"

function getStringWithoutSpace(str) {
    let result = '';

    for (let ch of str) {
        if (ch !== ' ') {
            result += ch;
        }
    }
    return result;
}


// using builtin function
function getStringWithoutSpace(str){
    return str.split(' ').join('');
}

console.log('string without space is ', getStringWithoutSpace("Hello World from JS"));