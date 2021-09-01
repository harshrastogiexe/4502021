function fact(num, result) {
  const cal = (num) => {
    if (!result.has(num)) result.set(num, num * cal(num - 1));
    return result.get(num);
  };
  return cal(num);
}

function comb(x, y) {
  let nemo = 1;
  let demo = 1;

  for (let i = x; i > x - y; i--) nemo *= i;
  for (let i = y; i > 0; i--) demo *= i;

  return nemo / demo;
}

function countPath(m, n) {
  const move = (i = 0, j = 0) => {
    if (i === m - 1 && j === n - 1) return 1;
    else if (i >= m || j >= n) return 0;
    else return move(i + 1, j) + move(i, j + 1);
  };
  return move();
}

function uniqueGridPath(m, n) {
  let result = 1;
  for (let i = m + n - 2; i > n - 1; i--) result *= i;
  for (let i = m - 1; i > 0; i--) result /= i;

  return result;
}

console.time("time");
console.table({
  1: uniqueGridPath(3, 7),
  2: uniqueGridPath(7, 3),
  3: uniqueGridPath(3, 3),
  4: countPath(3, 7),
});
console.timeEnd("time");
