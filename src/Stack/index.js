class Stack {
  top = -1;
  stack = [];

  _increase() {
    this.top++;
  }

  _decrease() {
    this.top--;
  }

  get size() {
    return this.top + 1;
  }

  get isEmpty() {
    return this.size === 0;
  }

  get top() {
    if (this.top < 0) return undefined;
    return this.stack(this.top);
  }

  push(value) {
    this.stack.push(value);
    this._increase();
  }

  pop() {
    const top = this.stack.pop();
    this._decrease();
    return top;
  }
}

module.exports = Stack;
