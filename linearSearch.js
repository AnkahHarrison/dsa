arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function linearSearch(arr, index) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === index) {
      return i; // Return the index of the index element if found
    }
    console.log("value was not found");
  }
  return -1; // Return -1 if the index element is not found
}
const result = linearSearch(arr, 10); // 4
console.log(result);
