function longestCommanSubscequnce(nums = []) {
  const lcs = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) lcs[i] = Math.max(lcs[i], lcs[j] + 1);
    }
  }

  console.log(lcs);
}

longestCommanSubscequnce([0, 3, 7, 2, 5, 8, 4, 6, 0]);
