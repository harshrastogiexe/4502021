function generateTable(value = 0, { rows, coloum }) {
  const memorize = new Array(rows);
  for (let i = 0; i < rows; i++) memorize[i] = new Array(coloum).fill(value);
  return memorize;
}

function longestCommonSubsequence(str1 = "", str2 = "") {
  const rows = str1.length + 1;
  const coloum = str2.length + 1;
  const memorize = generateTable(-1, { rows, coloum });

  memorize[0].fill(0);
  memorize.forEach((row) => (row[0] = 0));

  for (let i = 1; i < rows; i++)
    for (let j = 1; j < coloum; j++)
      if (str1[i - 1] === str2[j - 1])
        memorize[i][j] = 1 + memorize[i - 1][j - 1];
      else memorize[i][j] = Math.max(memorize[i - 1][j], memorize[i][j - 1]);

  let i = rows - 1;
  let j = coloum - 1;

  return memorize[rows - 1][coloum - 1];
}

try {
  console.time("LCS");
  const len = longestCommonSubsequence("BAABD", "BDAA");
  console.timeEnd("LCS");
  console.log(len);
} catch (e) {
  console.log(e);
}
