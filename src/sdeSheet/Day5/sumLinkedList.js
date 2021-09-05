const { List } = require("../../List/LinkedList");

function sumList(list1, list2) {
  const result = new List();

  let carry = 0;
  let [l1, l2] = [list1.head, list2.head];

  console.log(!!l1, !!l2);
  while (l1 || l2) {
    console.count("Iterate");
    console.log({ carry });
    let tempSum = 0;

    if (l1) {
      tempSum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      tempSum += l2.val;
      l2 = l2.next;
    }
    tempSum += carry;
    console.log({ value: tempSum });
    console.log("\n\n");

    result.add(tempSum < 10 ? tempSum : tempSum % 10);

    if (tempSum < 10) carry = 0;
    else carry = Math.floor(tempSum / 10);
  }

  if (carry > 0) result.add(carry);
  return result;
}

const list1 = new List();
list1.add(8, 3, 7, 5);

const list2 = new List();
list2.add(9, 1, 2);

const result = sumList(list1, list2);

console.log(...result);
