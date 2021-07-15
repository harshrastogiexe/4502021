function toBinary(num, binaryString = "") {
  if (!num) return binaryString || "0";
  binaryString = (num % 2 ? 1 : 0) + binaryString;
  return toBinary(num >> 1, binaryString);
}
