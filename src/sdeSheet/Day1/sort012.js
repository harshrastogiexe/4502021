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
    switch (nums[mid]) {
      case 0: {
        swap(nums, low++, mid++);
        break;
      }
      case 1: {
        mid++;
        break;
      }
      case 2: {
        swap(nums, mid, high--);
        break;
      }
    }
  }
  return nums;
}

const nums = sortColor([1, 1, 2, 0, 0, 0, 0, 1, 2, 2]);
console.table(nums);
