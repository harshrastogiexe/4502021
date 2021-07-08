function dutchNationalFlag(array) {
  const length = array.length;
  let low = 0;
  let mid = low;
  let high = length - 1;
  while (mid <= high) {
    switch (array[mid]) {
      case 0: {
        mid !== low && ([array[low], array[mid]] = [array[mid], array[low]]);
        mid++;
        low++;
        break;
      }

      case 2: {
        mid !== high && ([array[low], array[mid]] = [array[mid], array[low]]);
        high--;
        break;
      }

      case 1: {
        mid++;
        break;
      }
    }
  }

  return array;
}

const result = dutchNationalFlag([1, 1, 2, 0, 0, 0, 0, 1, 2, 2]);
console.log(result);
