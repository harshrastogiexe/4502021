function fourSum(nums = [], target = 0) {
  nums.sort((a, b) => a - b);

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let target2 = target - nums[i] - nums[j];
      let [front, back] = [j + 1, nums.length - 1];

      while (front < back) {
        const sum = nums[front] + nums[back];

        if (sum < target2) front++;
        else if (sum > target2) back--;
        else {
          const quad = [nums[i], nums[j], nums[front], nums[back]];
          result.push(quad);
          while (front < back && quad[2] === nums[front]) front++;
          while (front < back && quad[3] === nums[back]) back--;
        }
      }

      while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
    }
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
  }
  return result;
}

let result = fourSum([1, 0, -1, 0, -2, 2], 0);
// let result = fourSum([2, 2, 2, 2, 2], 8);
console.log(result);
