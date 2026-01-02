function shiftByOne(number, shiftby){
    const numStr = number.toString();
    const newStr  = numStr.slice(numStr.length - shiftby) + numStr.slice(0 , numStr.length- shiftby)
    return Number(newStr)
}

console.log("shifted number is ", shiftByOne(12345, 1));