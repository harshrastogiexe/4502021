function calculateOperation(str1 = "", str2 = "") {
  const calculate = (len1 = str1.length - 1, len2 = str2.length - 1) => {
    if (!len1) return len2;
    if (!len2) return len1;

    if (str1[len1] === str2[len2]) return calculate(len1 - 1, len2 - 1);
    else
      return (
        1 +
        Math.min(
          calculate(len1 - 1, len2), // insert
          calculate(len1, len2 - 1), // deletion
          calculate(len1 - 1, len2 - 1) // replace
        )
      );
  };
  return calculate();
}

const count = calculateOperation("SATURDAY", "SUNDAY");

console.log({ count });
