/**
 *
 * @param {number[][]} intervals Interval
 */
function mergeInterval(intervals) {
  intervals.sort(([timeA], [timeB]) => timeA - timeB);

  const len = intervals.length;
  const merged = [[intervals[0][0], intervals[0][1]]];

  const isMerging = (intvA, intvB) => {
    return intvA[1] >= intvB[0];
  };

  const merge = (intvA, intvB) => {
    return [intvA[0], Math.max(intvA[1], intvB[1])];
  };

  for (let i = 1; i < len; i++) {
    if (
      isMerging(merged[merged.length - 1], intervals[i]) &&
      merged[merged.length - 1][1] < intervals[i][1]
    )
      merged[merged.length - 1][1] = intervals[i][1];
    else merged.push(intervals[i]);
    // if (intervals[i][0] <= merge[merge.length - 1][1]) {
    //   merge[merge.length - 1][1] = intervals[i][1];
    // } else {
    //   merge.push(intervals[i]);
    // }
  }

  console.log(merged);
  return merged;
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
