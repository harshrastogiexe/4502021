/**
 *
 * @param {number[]} nums Num Array
 */
function kadaneAlgorithm(nums) {
  let csum = -Infinity;
  let bsum = -Infinity;

  for (const num of nums) {
    if (csum + num > num) csum += num;
    else csum = num;

    if (csum > bsum) bsum = csum;
  }

  return bsum;
}

// kadaneAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
// kadaneAlgorithm([1]); // 1
// kadaneAlgorithm([5, 4, -1, 7, 8]); // 23
