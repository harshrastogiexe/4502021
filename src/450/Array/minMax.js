// Find the maximum and minimum element in an array

function minmax(array = []) {
  let [min, max] = [array[0], array[0]];
  for (let i = 1, len = array.length; i < len; i++) {
    if (array[i] > max) max = array[i];
    if (array[i] < min) min = array[i];
  }

  return [min, max];
}

const result = minmax([1, -1, 3211, , 1, 1, 2, 1, 2, 1, 1, 2, 1, 1]);
console.log({ result });
