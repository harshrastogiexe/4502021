function longestIncreasingSubsequence(array = [], len = array.length) {
  // time complexity: n^2
  const memo = new Array(len);
  memo[0] = 1;
  let max = memo[0];

  for (let i = 1; i < len; i++) {
    memo[i] = 1;
    for (let j = 0; j < i; j++)
      if (array[j] < array[i]) memo[i] = Math.max(memo[i], memo[j] + 1);
    max = Math.max(max, memo[i]);
  }
  console.log({ memo });
  return max;
}
const binarySearch = (array, key) => {
  let start = 0,
    end = array.length - 1;

  if (key < array[start]) return start;
  if (key > array[end]) return -1;

  let mid, ceil;

  while (start <= end) {
    mid = (end + start) >> 1;
    if (key < array[mid]) {
      ceil = mid;
      end = mid - 1;
    } else if (key > array[mid]) {
      ceil = mid + 1;
      start = ceil;
    } else return mid;
  }

  return ceil;
};

function lcsBinarySearch(array = [], len = array.length) {
  // nlogn
  const memo = [array[0]];

  for (let i = 1; i < len; i++) {
    if (array[i] > memo[memo.length - 1]) memo.push(array[i]);
    else {
      const index = binarySearch(memo, array[i]);
      memo[index] = array[i];
    }
  }
  console.log(memo);
  return memo.length;
}

const length = lcsBinarySearch([3, 10, 20, 4, 6, 7, 40, 50, 5]);
console.table({ length });
