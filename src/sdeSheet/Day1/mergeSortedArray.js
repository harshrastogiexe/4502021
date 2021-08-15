/**
 *
 * @param {number[]} array1 Array
 * @param {number[]} array2 Array
 */
function mergeArray(array1, array2) {
  let lenA = array1.length,
    lenB = array2.length;

  const calcgap = (initgap) => (initgap <= 1 ? 0 : Math.ceil(initgap / 2));
  let gap = calcgap(lenA + lenB);

  while (gap > 0) {
    let i;
    for (i = 0; gap + i < lenA; i++)
      if (array1[gap + i] < array1[i])
        [array1[i], array1[i + gap]] = [array1[i + gap], array1[i]];

    let j = gap > lenA ? gap - lenA : 0;
    for (; i < lenA && j < lenB; i++, j++)
      if (array2[j] < array1[i])
        [array2[j], array1[i]] = [array1[i], array2[j]];

    if (j < lenB)
      for (; j + gap < lenB; j++)
        if (array2[j + gap] < array2[j])
          [array2[j], array2[j + gap]] = [array2[j + gap], array2[j]];

    gap = calcgap(gap);
  }

  return [array1, array2];
}

const result = mergeArray(
  [3, 27, 38, 43, 100, 201],
  [9, 10, 82, 100, 203, 404]
);
mergeArray([1, 5, 9, 10, 15, 20], [2, 3, 8, 13]);
