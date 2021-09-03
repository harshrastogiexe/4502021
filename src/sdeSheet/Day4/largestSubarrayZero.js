/**
 * Input:
 *N = 8
 *A[] = {15,-2,2,-8,1,7,10,23}
 *
 *Output: 5
 *
 *Explanation: The largest subarray with
 *sum 0 will be -2 2 -8 1 7.
 * @param {number[]} nums
 */

function largestSubarrayZero(nums = []) {
  const hash = new Map();
  let csum = 0;
  let longestLength = 0;

  for (let i = 0; i < nums.length; i++) {
    csum += nums[i];
    if (!csum) longestLength = i + 1;
    else {
      if (hash.has(csum)) {
        // console.log([...nums].slice(hash.get(csum) + 1, i + 1));
        longestLength = Math.max(longestLength, i - hash.get(csum));
      } else hash.set(csum, i);
    }
  }
  return longestLength;
}

// const result = largestSubarrayZero([-1, 1, -1, 1]);
const result = largestSubarrayZero([15, -2, 2, -8, 1, 7, 10, 23]);
console.log({ result });
