function generateSubsequence(str = "") {
  if (str === "") return [""];

  const alphabet = str[0];
  const restString = str.slice(1);

  const subsequence = generateSubsequence(restString);

  for (let i = 0, len = subsequence.length; i < len; i++)
    subsequence.push(alphabet + subsequence[i]);

  return subsequence;
}

console.table(generateSubsequence("GEEK"));
console.table(generateSubsequence("GEFK"));
