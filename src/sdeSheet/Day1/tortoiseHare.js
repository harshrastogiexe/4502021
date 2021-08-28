function findDuplicate(nums = []) {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  fast = nums[0];
  
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

// findDuplicate([3, 1, 3, 4, 2]);
findDuplicate([2, 5, 9, 6, 3, 4, 8, 9, 7, 1]);
