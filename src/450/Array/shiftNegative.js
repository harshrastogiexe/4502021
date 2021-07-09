function shiftNegative(array = []) {
  const length = array.length;
  let index = 0;
  for (let i = 0; i < length; i++) {
    if (array[i] < 0) {
      [array[index], array[i]] = [array[i], array[index]];
      index++;
    }
  }
  return array;
}

const result = shiftNegative([-12, 11, -13, -5, 6, -7, 5, -3, -6]);
console.log(result);
