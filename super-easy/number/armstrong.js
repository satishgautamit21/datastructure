function armStrong(num) {
    let finalNum = 0;
    const test = num;
    while(num > 0) {
        const rem = num%10;
        finalNum = finalNum + rem**3;
        num = parseInt(num/10)
    }
    return finalNum === test;
}



console.log('is armStrong ', armStrong(153))