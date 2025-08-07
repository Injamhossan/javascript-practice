function doMath (num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = num1 * num2;
    const result = multiply /2;
    return result;
}

const result = doMath(10, 5);
console.log (result);


function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(5));
console.log(isEven(10));
