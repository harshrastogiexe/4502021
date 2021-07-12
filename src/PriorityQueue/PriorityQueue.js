const BinaryHeap = require("../Heap/BinaryHeap");

class PriorityQueue extends BinaryHeap {
  constructor(array = []) {
    super("min");
    this.heap = array;
    this.buildHeap();
  }

  display() {
    console.log(this.heap);
  }

  get peek() {
    return this.heap[this.root];
  }

  poll() {
    return this.extract();
  }

  reverse() {
    if (this.type === "min") this.type = "max";
    else this.type = "min";

    this.buildHeap();
  }

  get isEmpty() {
    return this.size === 0;
  }
}

module.exports = PriorityQueue;
