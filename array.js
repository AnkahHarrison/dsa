function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
//big(n)

// function sumArrayReduce(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumArrayReduce([1, 2, 3, 4, 5]));
