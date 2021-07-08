class Queue {
  queue = [];

  get isEmpty() {
    return this.queue.length === 0;
  }

  enQueue(data) {
    this.queue.push(data);
  }

  deQueue() {
    return this.queue.shift();
  }
}
