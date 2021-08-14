const swap = require("../../utils");

function sort(array = [], length = array.length) {
  function partition(left, right) {
    const index = (right + left) >> 1;
    let pivot = array[index];

    while (left <= right) {
      while (array[left] < pivot) left++;
      while (array[right] > pivot) right--;
      left <= right && swap(array, left++, right--);
    }

    return left;
  }

  function quicksort(left = 0, right = length - 1) {
    if (left >= right) return;
    const index = partition(left, right);
    if (left < index - 1) quicksort(left, index - 1);
    if (index < right) quicksort(index, right);

    return array;
  }

  return quicksort();
}

function union(array1, array2) {
  sort(array1);
  sort(array2);
  const union = [];
  let i = 0,
    j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) union.push(array1[i++]);
    else if (array1[i] > array2[j]) union.push(array2[j++]);
    else {
      array1[i++];
      j++;
    }
  }

  while (i < array1.length) union.push(array1[i++]);
  while (j < array2.length) union.push(array2[j++]);
  console.log(union);
}

union([6, 2, 100], [85, 25, 1, 32, 54, 6]);
