function xorSubarray(nums, target) {
  let [xor, count] = [0, 0];
  const freq = new Map();

  for (const num of nums) {
    xor ^= num;
    if (freq.has(xor ^ target)) count += freq.get(xor ^ target);

    if (xor === target) count++;

    if (freq.has(xor)) freq.set(xor, freq.get(xor) + 1);
    else freq.set(xor, 1);

    // console.log(xor, count, freq);
  }

  console.log(count);
}

xorSubarray([5, 6, 7, 8, 9], 5);
