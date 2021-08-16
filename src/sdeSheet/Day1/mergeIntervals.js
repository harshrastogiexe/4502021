/**
 *
 * @param {number[][]} intervals Interval
 */
function mergeInterval(intervals, sorted = false) {
  !sorted && intervals.sort(([timeA], [timeB]) => timeA - timeB);
  // console.log(intervals);
  const stack = [];
  stack.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (stack[stack.length - 1][1] < intervals[i][0]) {
      stack.push(intervals[i]);
    } else {
      stack[stack.length - 1][1] = Math.max(
        stack[stack.length - 1][1],
        intervals[i][1]
      );
    }
  }

  console.log(stack);
}

mergeInterval([
  [1, 4],
  [0, 4],
]);

mergeInterval([
  [1, 3],
  [2, 6],
  [8, 10],
  [8, 9],
  [9, 11],
  [15, 18],
  [2, 4],
  [16, 17],
]);
