/**
 *
 * @param {number[][]} matrix Matrix
 */
function setZeros(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const bruteForce = () => {
    for (let i = 0; i < rows; i++)
      for (let j = 0; j < cols; j++) {
        if (matrix[i][j] === 0) {
          // updating Coloums
          for (let k = 0; k < rows; k++) {
            if (matrix[k][j] !== 0) {
              matrix[k][j] = null;
            }
          }

          // updating Rows
          for (let k = 0; k < cols; k++) {
            if (matrix[i][k] !== 0) {
              matrix[i][k] = null;
            }
          }
        }
      }

    for (let i = 0; i < rows; i++)
      for (let j = 0; j < cols; j++)
        if (matrix[i][j] === null) matrix[i][j] = 0;

    // console.log(matrix);
  };

  const betterApproch = () => {
    const isRow = new Array(rows);
    const isCol = new Array(cols);

    for (let i = 0; i < rows; i++)
      for (let j = 0; j < cols; j++) {
        if (matrix[i][j] === 0) {
          isRow[i] = true;
          isCol[j] = true;
        }
      }
    for (let i = 0; i < rows; i++)
      for (let j = 0; j < cols; j++) {
        if (isRow[i] || isCol[j]) matrix[i][j] = 0;
      }

    console.table(matrix);
  };

  const optimal = () => {
    let coloumModified = false;
    for (let i = 0; i < rows; i++) {
      if (matrix[i][0] === 0) coloumModified = true;
      for (let j = 1; j < cols; j++) {
        if (matrix[i][j] === 0) {
          matrix[0][j] = 0;
          matrix[i][0] = 0;
        }
      }
    }
    for (let i = rows - 1; i >= 0; i--) {
      for (let j = cols - 1; j >= 1; j--)
        if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
      if (coloumModified) matrix[i][0] = 0;
    }
  };

  const performanceTest = (callback) => {
    const before = performance.now();
    callback();
    console.log(performance.now() - before);
  };

  // performanceTest(bruteForce);
  // performanceTest(betterApproch);
  performanceTest(optimal);
}

// setZeros([
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5],
// ]);
setZeros([
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 0, 0, 1],
]);
