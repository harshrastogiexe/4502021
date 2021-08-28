const swap = require("../../utils");
/**
 *
 * @param {number[]} nums
 * @returns {number[]} sorted array
 */
function sortColor(nums = []) {
  let low = 0;
  let high = nums.length - 1;
  let mid = low;

  while (mid <= high) {
    if (nums[mid] === 0) swap(nums, low++, mid++);
    else if (nums[mid] === 1) mid++;
    else swap(nums, mid, high--);
  }
  return nums;
}

const nums = sortColor([1, 1, 2, 0, 0, 0, 0, 1, 2, 2]);
console.table(nums);
