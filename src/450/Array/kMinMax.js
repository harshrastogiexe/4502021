function heapify(array, index, length = array.length) {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largest = index;

  if (left < length && array[left] > array[largest]) largest = left;
  if (right < length && array[right] > array[largest]) largest = right;

  if (largest === index) return;

  [array[index], array[largest]] = [array[largest], array[index]];
  heapify(array, largest, length);
  return array;
}

function buildHeap(array, len = array.length) {
  for (let i = Math.floor(len / 2 - 1); i >= 0; i--) {
    heapify(array, i, len);
  }
  return array;
}

function kMin(array = [], k) {
  let max = null;
  for (let i = 0; i < k; i++) {
    max = buildHeap(array, array.length).shift();
    console.log(max, array);
  }

  return max;
}

let result = kMin([7, 10, 4, 3, 20, 15], 1);
console.log({ maxHeap });
