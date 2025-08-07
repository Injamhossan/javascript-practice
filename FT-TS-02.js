function processNumber(num) {
  if (num % 2 === 0) {
    return num / 2;
  } else {
    return num * 2;
  }
}

// Example usage:
console.log(processNumber(5));
console.log(processNumber(8));