// traverse from back
// find i: arr[i] < arr[i+1]
// traverse from back
// find j: arr[j] > arr[i]

function nextPermutation(nums) {
  const len = nums.length - 1;
  let i = -1,
    j = -1;

  for (i = len - 1; i >= 0; i--) if (nums[i + 1] > nums[i]) break;

  for (j = len; j >= 0; j--) if (nums[j] > nums[i]) break;

  if (i !== -1 && j !== -1) [nums[i], nums[j]] = [nums[j], nums[i]];

  for (let k = i + 1; k < (len + i + 1) >> 1; k++)
    [nums[k], nums[len + i + 1 - k]] = [nums[len + i + 1 - k], nums[k]];

  console.log(nums);
}
nextPermutation([3, 2, 1]);
