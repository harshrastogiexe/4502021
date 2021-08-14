function sieveOfEratosthenes(num = 0) {
  if (num < 2) return [];

  const array = new Array(num - 2);

  for (let i = 3; i < num; i++) {
    if (i % 2 === 0) array[i - 2] = false;
    else array[i - 2] = true;
  }
  array[0] = true;

  for (let i = 2; i < num >> 1; i++)
    for (let j = i + 1; j < num && i % 2 !== 0; j++)
      if (j % i === 0) array[j - 2] = false;

  const primes = [];
  for (let i = 0; i < array.length; i++) if (array[i]) primes.push(i + 2);

  return primes;
}

function sortNonZerosPrime(count) {
  return sieveOfEratosthenes(count).filter((num) => !/0/.test(num.toString()));
}

const result = sortNonZerosPrime(500);
console.log(result.length, sieveOfEratosthenes(500).length);
