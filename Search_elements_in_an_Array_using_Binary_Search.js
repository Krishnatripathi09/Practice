function binarySearch(arr, target) {
  arr.sort((a, b) => a - b); 

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1; 
}


const unsortedArray = [10, 2, 5, 3, 8];
const target = 3;
const result = binarySearch(unsortedArray, target);
console.log(result); // 