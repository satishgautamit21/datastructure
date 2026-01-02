function reverse(num) {
    let finalNum = 0;
    while(num > 0) {
        const rem = num%10;
        finalNum = finalNum*10 + rem;
        num = parseInt(num/10)
    }
    return finalNum;
}

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