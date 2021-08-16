/**
 *
 * @param {number} count Number Of Rows To Be Printed
 */
function pascalTriangle1(count) {
  const result = [];
  let prev = null;

  for (let i = 0; i < count; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) row.push(1);
      else row.push(prev[j] + prev[j - 1]);
    }
    prev = row;
    result.push(row);
  }
}

function pascalTriangle2(count) {
  const memo = new Map();

  const factorial = (num) => {
    if (num == 0 || num == 1) return 1;
    if (memo.has(num)) return memo.get(num);
    else {
      memo.set(num, num * factorial(num - 1));
    }
    return memo.get(num);
  };
  const result = [];
  for (let i = 0; i < count; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) row.push(1);
      else row[j] = factorial(i) / (factorial(j) * factorial(i - j));
    }
    result.push(row);
  }
}

console.time("Time");
pascalTriangle1(30);
console.timeEnd("Time");
