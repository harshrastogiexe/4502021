/**
 *
 * @param {number[]} array1 Array
 * @param {number[]} array2 Array
 */
function mergeArray(array1, array2) {
  let gap = Math.ceil((array1.length + array2.length) / 2);
  while (gap > 0) {
    let i = 0;
    for (; i + gap < array1.length; i++)
      if (array1[i + gap] < array1[i])
        [array1[i], array1[i + gap]] = [array1[i + gap], array1[i]];

    let j = gap > array1.length ? gap - array1.length : 0;
    for (; i < array1.length && j < array2.length; i++, j++)
      if (array2[j] < array1[i])
        [array2[j], array1[i]] = [array1[i], array2[j]];

    if (j < array2.length) {
      for (let j = 0; j + gap < array2.length; j++) {
        [array2[j], array2[j + gap]] = [array2[j + gap], array2[j]];
      }
    }
    gap = gap >> 1;
  }
  console.log(...array1, ...array2);
}

mergeArray([3, 27, 38, 43], [9, 10, 82]);
