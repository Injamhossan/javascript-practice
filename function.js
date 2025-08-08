  function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);

    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.';
  
    return result;
  }

  const shuvoHeight = inchToFeet2(75);
  console.log(shuvoHeight);

Output:
6 ft 3 inch.
