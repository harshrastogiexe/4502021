function findColumIndex(matrix, target, rows, cols) {
  let [low, high] = [0, rows - 1];
  let index = -1;

  while (low <= high) {
    mid = (low + high) >> 1;
    if (target === matrix[mid][0]) return [mid, 0];
    if (target < matrix[mid][0]) high = mid - 1;
    else {
      index = mid;
      low = mid + 1;
    }
  }
  return [index];
}

function searchRow(row, target) {
  let [low, high, mid] = [0, row.length - 1];

  while (low <= high) {
    mid = (low + high) >> 1;
    if (row[mid] === target) return [mid, true];
    else if (row[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return [-1, false];
}

function searchMatrix(matrix, target) {
  const [rows, cols] = [matrix.length, matrix[0].length];

  const [index, col] = findColumIndex(matrix, target, rows, cols);
  if (col !== undefined) return true;
  else if (index === -1) return false;

  return searchRow(matrix[index], target)[1];
}

function searchMatrixBinary(matrix, target) {
  if (!matrix.length) return false;
  if (!Number.isInteger(parseInt(target)))
    throw new Error("Unknow Search Value");

  const [m, n] = [matrix.length, matrix[0].length];
  let [start, end] = [0, m * n - 1];

  while (start <= end) {
    const mid = (start + end) >> 1;
    const middleValue = matrix[Math.floor(mid / n)][mid % n];

    if (middleValue > target) end = mid - 1;
    else if (middleValue < target) start = mid + 1;
    else return true;
  }

  return false;
}

const result = searchMatrixBinary(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  0
);

console.log({ result });
