function toBin(num) {
  if (num === 0) return "0";
  return (num % 2 ? "1" : "0") + toBin(num >> 1);
}
2;
function toBinary(number) {
  return (+number >> 0).toString(2);
}

function reverseNumber(num = 0) {
  const bits = toBinary(num);
  const binary = new Array(32 - bits.length + 1).join("1") + bits;

  let result = 0;
  for (let i = 0; i < 32; i++)
    result += (binary[31 - i] === "1" ? 1 : 0) * 2 ** i;

  console.log(parseInt(binary, 2));
  console.log({ result, binary });
}

reverseNumber(10);
