function generateTable(value = 0, { rows, coloums }) {
  const memorize = new Array(rows);
  for (let i = 0; i < rows; i++) memorize[i] = new Array(coloums).fill(value);
  return memorize;
}

function calculateOperationRecursive(str1 = "", str2 = "") {
  const rows = str1.length + 1;
  const coloums = str2.length + 1;
  const memorize = generateTable(-1, { rows, coloums });

  const calculate = (len1 = rows - 1, len2 = coloums - 1) => {
    if (memorize[len1][len2] !== -1) return memorize[len1][len2];
    else {
      if (!len1) {
        memorize[len1][len2] = len2;
        return memorize[len1][len2];
      }
      if (!len2) {
        memorize[len1][len2] = len1;
        return memorize[len1][len2];
      }

      if (str1[len1] === str2[len2])
        memorize[len1][len2] = calculate(len1 - 1, len2 - 1);
      else
        memorize[len1][len2] =
          1 +
          Math.min(
            calculate(len1 - 1, len2), // insert
            calculate(len1, len2 - 1), // deletion
            calculate(len1 - 1, len2 - 1) // replace
          );
    }
    return memorize[len1][len2];
  };
  calculate();
  console.table(memorize);
}

function calculateOperationIterative(str1 = "", str2 = "") {
  const memo = generateTable(-1, {
    rows: str1.length + 1,
    coloums: str2.length + 1,
  });

  for (let i = 0; i <= str2.length; i++) memo[0][i] = i;
  for (let i = 0; i <= str1.length; i++) memo[i][0] = i;

  for (let i = 1; i <= str1.length; i++)
    for (let j = 1; j <= str2.length; j++)
      if (str1[i - 1] === str2[j - 1]) memo[i][j] = memo[i - 1][j - 1];
      else
        memo[i][j] =
          1 + Math.min(memo[i - 1][j - 1], memo[i - 1][j], memo[i][j - 1]);

  return memo[str1.length - 1][str2.length - 1];
}

// const count = calculateOperationRecursive("SATURDAY", "SUNDAY");
const count = calculateOperationIterative("HELLO", "HELLO");

console.log({ count });
