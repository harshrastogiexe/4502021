const { List } = require("../../List/LinkedList");

function reverseList(head = null) {
  let left = null;
  while (head) {
    let right = head.next;
    [head.next, left, head] = [left, this.head, right];
  }
  return left;
}

const list1 = new List();
list1.add(3, 4, 8, 10);

const list2 = new List();
list2.add(5, 7, 9, 10);

console.table({ l1: [...list1], l2: [...list2] });

try {
  list1.merge(list2);
  console.log("SUCCESS");
} catch (e) {
  console.log("Failure");
}

console.log(...list1);
