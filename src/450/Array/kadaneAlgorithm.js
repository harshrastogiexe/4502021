function kadaneAlgorithm(array = [], length = array.length) {
  let currentSum = 0;
  let maximumSum = -Infinity;

  for (let i = 0; i < length; i++) {
    if (currentSum + array[i] > array[i]) currentSum += array[i];
    else currentSum = array[i];

    if (currentSum > maximumSum) maximumSum = currentSum;
  }

  return maximumSum;
}

console.log(kadaneAlgorithm([-1, -2, -3, -4]));
console.log(kadaneAlgorithm([1, 2, 3, -2, 5]));
console.log(kadaneAlgorithm([-9, 1, 2, 0, -7, 5, 20, -20, -7, 4, 5, 6]));
