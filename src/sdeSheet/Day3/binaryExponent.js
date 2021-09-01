function myPow(x, n) {
  if (n === 0) return 1;
  let result =
    n % 2 ? x * myPow(x, Math.abs(n) - 1) : myPow(x * x, Math.abs(n) >> 1);
  return n >= 0 ? result : 1 / result;
}
