function findDuplicate(array = []) {
  const fast = (i) => array[array[i]];
  const slow = (i) => array[i];

  let slowPtr = array[0];
  let fastPtr = array[0];

  do {
    slowPtr = slow(slowPtr);
    fastPtr = fast(fastPtr);
  } while (slowPtr !== fastPtr);

  fastPtr = array[0];

  while (slowPtr !== fastPtr) {
    slowPtr = slow(slowPtr);
    fastPtr = slow(fastPtr);
  }

  return slowPtr;
}

const ans = findDuplicate([1, 3, 4, 2, 2]);
console.log({ ans });
