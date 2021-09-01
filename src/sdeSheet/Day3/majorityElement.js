/**
 * Function Finds The Majorority Element In An Array That Ocour More Than n/2 times.
 * @param {number[]} nums
 */
function majorityElement(nums = [1, 2]) {
  let [count, element] = [0, 0];
  nums.forEach((num) => {
    if (count === 0) element = num;
    if (element === num) count++;
    else count--;
  });
  return element;
}

function majorityElementv2(nums) {
  let [elm1, elm2, count1, count2] = [-1, -1, 0, 0];

  nums.forEach((num) => {
    if (num === elm1) count1++;
    else if (num === elm2) count2++;
    else if (count1 === 0) {
      elm1 = num;
      count1++;
    } else if (count2 === 0) {
      elm2 = num;
      count2++;
    } else {
      count1--;
      count2--;
    }
  });

  const list = [];
  [count1, count2] = [0, 0];

  nums.forEach((num) => {
    if (num === elm1) count1++;
    else if (num === elm2) count2++;
  });

  if (count1 > nums.length / 3) list.push(elm1);
  if (count2 > nums.length / 3) list.push(elm2);

  return list;
}

// majorityElement([7, 7, 5, 7, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5]);
majorityElementv2([3, 2, 3]);
