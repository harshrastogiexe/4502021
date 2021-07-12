const PriorityQueue = require("../../PriorityQueue/PriorityQueue");

function countPurchasedItems(costArray, sum) {
  const heap = new PriorityQueue(costArray);
  let count = 0;
  while (!heap.isEmpty && heap.peek <= sum) {
    sum -= heap.poll();
    count++;
  }

  console.log(count);
  return count;
}

countPurchasedItems([1, 12, 5, 111, 200], 10);
countPurchasedItems([20, 10, 5, 30, 100], 35);
