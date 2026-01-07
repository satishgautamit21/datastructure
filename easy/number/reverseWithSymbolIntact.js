// handle other scenario
function reverse(num) {
    const sign = num < 0 ? -1 : 1;
    num = Math.abs(num);

    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return rev * sign;
}


console.log('reverse num is ', reverse(12345))