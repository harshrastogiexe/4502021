function rotate(array = [], length = array.length) {
  const lastElm = array[length - 1];
  for (let i = length - 1; i > 0; i--) array[i] = array[i - 1];
  array[0] = lastElm;
  return array;
}

console.log(rotate([9, 8, 7, 6, 4, 2, 1, 3]));
