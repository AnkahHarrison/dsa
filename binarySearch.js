arr = [1, 2, 3, 4, 5, 6, 7, 8];
function binarySearch(array, index) {
  let left = 0; // left pointer gets the first index of the array
  let right = array.length - 1; // right pointer gets the last index of the array
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2); // mid pointer gets the middle index of the array
    if (array[mid] === index) {
      console.log("mid value was found");
      return mid;
    }
    if (array[mid] < index) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
const result = binarySearch(arr, 5); // 4
console.log(result);
