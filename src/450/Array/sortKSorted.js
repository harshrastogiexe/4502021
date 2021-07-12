const PriorityQueue = require("../../PriorityQueue/PriorityQueue");

function sortKSorted(array = [], k) {
  const queue = new PriorityQueue();

  
  for (let i = 0; i <= k; i++) queue.insert(array[i]);
  let index = 0;
  for (let i = k + 1; i < array.length; i++) {
    array[index++] = queue.poll();
    queue.insert(array[i]);
  }

  while (!queue.isEmpty) array[index++] = queue.poll();
  console.log(array);
}

sortKSorted([9, 8, 7, 19, 18], 2);
