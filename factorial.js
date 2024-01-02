function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
//console.log(factorial(600000)); // 720
//The Big O notation for the given code is O(n), where n is the input number.
// This is because the code uses a loop that iterates from 2 to n,
// performing a constant-time operation in each iteration.
//Therefore, the time complexity of the code is directly proportional to the size of the input.
