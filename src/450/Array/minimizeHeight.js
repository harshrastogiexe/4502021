function minimizeHeight(array = [], k = 0, length = array.length) {
  // const min = (val) => (val - k >= 0 ? val - k : val);
  // const max = (val) => val + k;

  let minHeight = Infinity;
  let maxHeight = -Infinity;

  console.log(array);
  for (let i = 0; i < length; i++) {
    if (array[i] > k) array[i] -= k;
    else array[i] += k;

    if (array[i] < minHeight) minHeight = array[i];
    if (array[i] > maxHeight) maxHeight = array[i];
  }
  console.log(array);
  console.log({ minHeight, maxHeight });

  return maxHeight - minHeight;
}

console.log(minimizeHeight([1, 5, 15, 10], 3));
