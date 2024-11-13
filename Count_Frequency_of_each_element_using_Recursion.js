function countFrequency(arr, frequency = {}, index = 0) {
    if (index === arr.length) {
      return frequency;
    }
    let element = arr[index];
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
    return countFrequency(arr, frequency, index + 1);
  }
  console.log(countFrequency([1, 2, 2, 1, 3, 4, 5, 6, 6, 7, 7, 7]));
  