function missingReapeatingNumber(nums = []) {
  const sum = (nums.length * (nums.length + 1)) >> 1;
  const set = new Set();
  const result = {};
  let osum = 0;

  for (const num of nums) {
    osum += num;
    if (set.has(num)) result.repeating = num;
    else set.add(num);
  }
  result.missing = sum - (osum - result.repeating);

  return result;
}

function xorTechnique(nums = []) {
  let calcxor = nums[0];
  for (let i = 1; i < nums.length; i++) calcxor ^= nums[i];

  for (let i = 1; i <= nums.length; i++) calcxor ^= i;

  const rightBit = calcxor & ~(calcxor - 1);
  let missing = 0;
  let repeating = 0;

  for (let i = 0; i < nums.length; i++) {
    if (rightBit & nums[i]) missing ^= nums[i];
    else repeating ^= nums[i];
  }

  for (let i = 1; i <= nums.length; i++) {
    if (rightBit & i) missing ^= i;
    else repeating ^= i;
  }

  return { missing, repeating };
}

// const result = missingReapeatingNumber([4, 3, 6, 2, 2, 1]);
const result = xorTechnique([4, 3, 6, 2, 1, 1]);
console.table(result);
