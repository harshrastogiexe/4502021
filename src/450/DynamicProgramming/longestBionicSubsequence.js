function largestBionicSequence(array = []) {
  const generateLIS = (array) => {
    const lis = new Array(array.length).fill(1);
    for (let i = 1; i < array.length; i++)
      for (let j = 0; j < i; j++)
        if (array[j] < array[i]) lis[i] = Math.max(lis[i], lis[j] + 1);
    return lis;
  };

  const lis = generateLIS(array);
  const lds = generateLIS(array.reverse()).reverse();

  let max = lis[0] + lds[0] - 1;
  for (let i = 1; i < lis.length; i++) {
    const result = lis[i] + lds[i] - 1;
    if (result > max) max = result;hello.h
  }
  return max;
}

const len = largestBionicSequence([1, 11, 2, 10, 4, 5, 2, 1]);
console.log({ len });
