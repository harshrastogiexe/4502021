class Queue {
  queue = [];

  get size() {
    return this.length;
  }

  get isEmpty() {
    return this.queue.length === 0;
  }

  enQueue(data) {
    this.queue.push(data);
  }

  deQueue() {
    return this.queue.shift();
  }

  get front() {
    if (this.isEmpty) return;
    return this.queue[0];
  }

  get back() {
    if (this.isEmpty) return;
    return this.queue[this.size - 1];
  }
}

module.exports = Queue;
