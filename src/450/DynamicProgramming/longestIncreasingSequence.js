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
const binarySearch = (array, key, { length }) => {
  let start = 0,
    end = length - 1;
  let mid;
  let ceil;
  while (start <= end) {
    mid = (end + start) >> 1;

    if (array[mid] === key) return mid;
    else if (array[mid] < key) {
      ceil = mid;
      end = mid - 1;
    } else {
      ceil = start;
      start = mid + 1;
    }
  }
  return ceil;
};

function lcsBinarySearch(array = [], len = array.length) {
  const memo = [array[0]];
  // console.log(binarySearch(memo, 2, { length: 1 }));
  for (let i = 1; i < len; i++) {
    if (array[i] > memo[memo.length - 1]) memo.push(array[i]);
    else {
      const index = binarySearch(memo, array[i], { length: memo.length });
      memo[index] = array[i];
    }
    console.log(memo);
  }
  return memo.length;
}

const length = lcsBinarySearch([3, 10, 20, 4, 6, 7]);
console.table({ length });
