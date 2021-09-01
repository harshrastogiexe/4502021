function threeSum(nums = []) {
  nums.sort();
  const result = [];

  if (nums.length < 3) return result;

  for (let i = 0; i < nums.length; i++) {
    let target2 = 0 - nums[i];
    let [front, back] = [i + 1, nums.length - 1];

    while (front < back) {
      const sum = nums[front] + nums[back];
      if (sum < target2) front++;
      else if (sum > target2) back--;
      else {
        const triple = [nums[i], nums[front++], nums[back--]];
        result.push(triple);

        while (front < back && nums[front] === triple[1]) front++;
        while (front < back && nums[back] === triple[2]) back--;
      }
    }
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
  }
  return result;
}

threeSum([-1, 0, 1, 2, -1, -4]);
