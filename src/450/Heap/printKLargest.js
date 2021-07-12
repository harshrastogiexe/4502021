const BinaryHeap = require("../../Heap/BinaryHeap");

function printKLargest(array, k) {
  const store = new BinaryHeap("min");
  store.heap = array;
  store.buildHeap();

  while (k--) {
    console.log(store.extract());
  }
}

printKLargest([5, 15, 10, 20, 8], 4);
