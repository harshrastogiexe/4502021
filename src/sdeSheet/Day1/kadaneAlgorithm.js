/**
 *
 * @param {number[]} nums Num Array
 */
function kadaneAlgorithm(nums) {
  let csum = -Infinity;
  let bsum = -Infinity;
  let start = 0;
  let end = 0;
  for (const num of nums) {
    if (csum + num > num) csum += num;
    else {
      csum = num;
      start = num;
    }

    if (csum > bsum) {
      bsum = csum;
      end = num;
    }
  }
  console.log({ start, end });
  return bsum;
}
/**
 *
 * @param {number[]} nums Num Array
 */
function dpSolution(nums) {
  const len = nums.length;
  const memo = new Array(len);
  let max = nums[0];
  memo[0] = nums[0];

  for (let i = 0; i < len; i++) {
    memo[i] = nums[i] + (memo[i - 1] > 0 ? memo[i - 1] : 0);
    if (memo[i] > max) max = memo[i];
  }

  return max;
}

kadaneAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
dpSolution([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
// kadaneAlgorithm([1]); // 1
// kadaneAlgorithm([5, 4, -1, 7, 8]); // 23
