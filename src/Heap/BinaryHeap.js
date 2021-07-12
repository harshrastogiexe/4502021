class BinaryHeap {
  heap = [];

  constructor(type) {
    this.type = type === "min" ? "min" : "max";
  }

  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  _left(i) {
    return 2 * i + 1;
  }

  _right(i) {
    return 2 * i + 2;
  }

  get _last() {
    return this.heap.length - 1;
  }

  get size() {
    return this.heap.length;
  }

  get root() {
    return 0;
  }

  _swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  _check(i, position) {
    return this.type === "min"
      ? this.heap[i] < this.heap[position]
      : this.heap[i] > this.heap[position];
  }

  heapify(index, size = this.size) {
    const left = this._left(index);
    const right = this._right(index);
    let position = index;

    if (left < size && this._check(left, position)) position = left;
    if (right < size && this._check(right, position)) position = right;

    if (index === position) return;

    this._swap(index, position);
    this.heapify(position, size);
  }

  insert(value) {
    this.heap.push(value);
    let current = this.size - 1;
    let i = this._parent(current);

    for (; i >= 0 && !this._check(i, current); i = this._parent(i)) {
      this._swap(current, i);
      current = i;
    }
  }

  replace(value, index) {
    this.heap[index] = value;
    let i = this._parent(index);
    for (; i >= 0 && !this._check(i, index); i = this._parent(i)) {
      this._swap(index, i);
      index = i;
    }
  }

  extract() {
    if (!this.size) return null;
    if (this.size === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapify(0);

    return value;
  }

  delete(index) {
    this.replace(this.type === "min" ? -Infinity : Infinity, index);
    this.extract();
  }

  buildHeap() {
    for (let i = this._parent(this.size - 1); i >= 0; i--) {
      this.heapify(i);
    }
  }
}

const store = new BinaryHeap("max");
store.heap = [7, 20, 15, 3, 12, 4];
store.buildHeap();
console.log(store.heap);
store.delete(3);
console.log(store.heap);
