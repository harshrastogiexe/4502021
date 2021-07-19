function fractionalKnapSack(items = [], capacity = 100) {
  items.sort(
    (item1, item2) => item2.value / item2.weight - item1.value / item1.weight
  );
  let totalValue = 0;

  for (const item of items)
    if (item.weight <= capacity) {
      totalValue += item.value;
      capacity -= item.weight;
    } else {
      totalValue += (item.value * capacity) / item.weight;
      return totalValue;
    }

  return totalValue;
}

const totalValue = fractionalKnapSack(
  [
    { weight: 10, value: 200 },
    { weight: 5, value: 50 },
    { weight: 20, value: 100 },
  ],
  15
);

console.log(totalValue);
