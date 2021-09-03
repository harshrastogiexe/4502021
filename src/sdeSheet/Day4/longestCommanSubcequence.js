const { generateRandom } = require("../../utils/randomNumber");

function longestCommanSubscequnce(nums = []) {
  const set = new Set(nums);
  let longestLength = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let currentNum = num + 1;
      while (set.has(currentNum)) currentNum++;
      longestLength = Math.max(longestLength, currentNum - num);
    }
  }
  return longestLength;
}

const nums = [];

// for (let number of generateRandom(5, { max: 6 })) nums.push(Math.round(number));

longestCommanSubscequnce([1, 2, 0, 1]);
longestCommanSubscequnce([100, 4, 200, 1, 3, 2]);
// console.log(nums);
// longestCommanSubscequnce(nums);
