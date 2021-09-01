function transpose(matrix, rows) {
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < i; j++)
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
}

/**
 *
 * @param {number[][]} matrix
 */
function rotateMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < i; j++)
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  matrix.forEach((row) => row.reverse());
}

const result = rotateMatrix([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);

console.log(
  rotateMatrix([
    [1, 2],
    [3, 4],
  ])
);
