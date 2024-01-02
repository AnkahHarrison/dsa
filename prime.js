function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(isPrime(2)); // Expected output: true
console.log(isPrime(3)); // Expected output: true
console.log(isPrime(4)); // Expected output: false
console.log(isPrime(5)); // Expected output: true
console.log(isPrime(6)); // Expected output: false
console.log(isPrime(7)); // Expected output: true
//

//The time complexity of the isPrime function is O(sqrt(n)), where n is the input number. This is because the function iterates from 2 to the square root of the number, checking for divisibility.
