function countCoin(coins, amount) {
  const count = new Array(coins.length).fill(0);

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= amount) {
      count[i] = Math.floor(amount / coins[i]);
      amount -= count[i] * coins[i];
    }
    if (!amount) return count;
  }
}

const count = countCoin([10, 5, 2, 1], 78);
console.log(count);
