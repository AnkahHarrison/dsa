function fibonacci(n) {
  const fib = [0, 1]; //1
  for (let i = 2; i < n; i++) {
    // fib.push(fib[i - 2] + fib[i - 1]);
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;//1 
}
//Testing the fibonacci function
console.log(fibonacci(2)); // Change the input value to get different Fibonacci numbers
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(7));


// big o is linear time complexity
