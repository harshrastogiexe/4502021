function maxsumincreasing(array = []) {
  const msis = [];
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    msis[i] = array[i];
    for (let j = 0; j < i; j++)
      if (array[j] < array[i] && msis[j] + array[i] > msis[i])
        msis[i] = msis[j] + array[i];

    if (msis[i] > max) max = msis[i];
  }
  return max;
}

maxsumincreasing([3, 20, 4, 6, 7, 30]);
