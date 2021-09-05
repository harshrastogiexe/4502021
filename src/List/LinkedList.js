class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

exports.List = class {
  head = null;

  add(...values) {
    values.forEach((value) => {
      if (!this.head) return (this.head = new ListNode(value));
      let curr = this.head;
      while (curr.next) curr = curr.next;
      curr.next = new ListNode(value);
    });
  }

  *[Symbol.iterator]() {
    let curr = this.head;
    while (curr) {
      yield curr.val;
      curr = curr.next;
    }
  }

  get middle() {
    let [slow, fast] = [this.head, this.head];
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  get length() {
    if (!this.head) return 0;
    let [current, count] = [this.head, 0];

    while (current) {
      current = current.next;
      count++;
    }
    return count;
  }

  reverse() {
    if (!this.head) return;

    let left = null;
    while (this.head) {
      let right = this.head.next;
      this.head.next = left;
      left = this.head;
      this.head = right;
    }
    this.head = left;
  }

  merge(list = new List()) {
    if (!this.head) this.head = list.head;
    if (!list.head) return this.head;

    let [list1, list2] =
      this.head.val < list.head.val
        ? [this.head, list.head]
        : [list.head, this.head];

    const start = list1;

    while (list1 && list2) {
      let temp = null;
      while (list1 && list1.val <= list2.val) {
        temp = list1;
        list1 = list1.next;
      }
      temp.next = list2;
      [list1, list2] = [list2, list1];
    }

    this.head = start;
  }

  removeNthFromEnd(num = 0, head = this.head) {
    if (!head) return head;

    let [behind, forward] = [head, head];
    for (let i = 1; i < num + 1; i++) forward = forward.next;

    let temp = null;
    while (forward) {
      forward = forward.next;
      temp = behind;
      behind = behind.next;
    }
    if (!temp) this.head = this.head.next;
    else temp.next = behind.next;
    return this.head;
  }

};

const list = new this.List();
list.add(..."1234".split(""));
console.log({ list: [...list] });

list.removeNthFromEnd(2);
list.removeNthFromEnd(1);
