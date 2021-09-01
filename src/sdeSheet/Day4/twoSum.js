function twoSum(nums = [], target = 0) {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (hash.has(complement)) return [hash.get(complement), i];
    else hash.set(nums[i], i);
  }
}

let result;

result = twoSum([2, 7, 11, 15], 9);
result = twoSum([3, 2, 4], 6);
result = twoSum([3, 3], 6);
console.log(result);
