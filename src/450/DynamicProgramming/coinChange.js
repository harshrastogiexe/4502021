function generateTable(value = 0, { rows, coloum }) {
  const memorize = new Array(rows);
  for (let i = 0; i < rows; i++) memorize[i] = new Array(coloum).fill(value);
  return memorize;
}

function coinChange(coins = [], num) {
  const memorize = generateTable(Infinity, {
    rows: coins.length + 1,
    coloum: num + 1,
  });

  memorize.forEach((row) => (row[0] = 0));

  for (let i = 1; i < coins.length + 1; i++)
    for (let j = 1; j < num + 1; j++) {
      if (coins[i - 1] > j) memorize[i][j] = memorize[i - 1][j];
      else
        memorize[i][j] = Math.min(
          1 + memorize[i][j - coins[i - 1]],
          memorize[i - 1][j]
        );
    }
  console.table(memorize);
  return { count: memorize[coins.length][num] };
}

const { count } = coinChange([1, 2, 5], 8);
console.log({ count });
