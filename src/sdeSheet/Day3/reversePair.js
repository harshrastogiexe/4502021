/**
 * Given an integer array nums, return the number of reverse pairs in the array.
 * A reverse pair is a pair (i, j) where 0 <= i < j < nums.length and nums[i] > 2 * nums[j].
 *
 * Example 1:
 * Input: nums = [1,3,2,3,1]
 *  Output: 2
 *
 * Example 2
 * Input: nums = [2,4,3,5,1]
 *
 * Output: 3
 * @param {number[]} nums Array
 */
function reversePairs(nums, start = 0, end = nums.length - 1) {
  if (start >= end) return 0;
  let mid = start + ((end - start) >> 1);

  let pairCount =
    reversePairs(nums, start, mid) + reversePairs(nums, mid + 1, end);

  for (let i = start, j = mid + 1; i <= mid && j <= end; ) {
    if (nums[i] > nums[j] * 2) {
      pairCount += mid - i + 1;
      j++;
    } else i++;
  }

  const merge = [];
  let [i, j] = [start, mid + 1];

  while (i <= mid && j <= end) {
    if (nums[i] <= nums[j]) {
      merge.push(nums[i++]);
    } else {
      merge.push(nums[j++]);
    }
  }

  while (i <= mid) merge.push(nums[i++]);
  while (j <= end) merge.push(nums[j++]);

  merge.forEach((val, i) => (nums[start + i] = val));
  return pairCount;
}

// const result = reversePairs([2, 4, 3, 5, 1]);
const result = reversePairs([
  2147483647, 2147483647, 2147483647, 2147483647, 2147483647, 2147483647,
]);

console.log(result);
