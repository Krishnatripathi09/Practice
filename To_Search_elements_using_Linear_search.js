function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; //return index of target
    }
  }
  return -1; 
}

//Example
const array = [10, 20, 30, 40, 50];
const target = 30;

const result = linearSearch(array, target);
if (result !== -1) {
  console.log(`Element found at index: ${result}`);
} else {
  console.log("Element not found in the array.");
}
