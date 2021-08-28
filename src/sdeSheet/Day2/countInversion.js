// count numeber of inversion using merge sort
function countInversion(nums, low = 0, high = nums.length - 1) {
  if (low >= high) return 0;
  console.count("Calls");
  let mid = (low + high) >> 1;

  let count =
    countInversion(nums, low, mid) + countInversion(nums, mid + 1, high);

  let i = low;
  let j = mid + 1;
  const array = [];

  while (i <= mid && j <= high) {
    if (nums[i] <= nums[j]) array.push(nums[i++]);
    else {
      array.push(nums[j++]);
      count += mid - i + 1;
    }
  }

  while (i <= mid) array.push(nums[i++]);
  while (j <= high) array.push(nums[j++]);
  array.forEach((val, i) => (nums[low + i] = val));
  // console.log({ count, low, mid, high });
  return count;
}

const reuslt = countInversion([1, 20, 6, 4, 5]);

console.log(reuslt);
