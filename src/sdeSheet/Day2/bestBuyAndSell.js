/**
 *
 * @param {Number[]} prices Array consits of prices to buy
 * @returns {Number} Maximum Profit
 */

function maxProfit(prices) {
  let [min, profit] = [Infinity, 0];

  prices.forEach((price) => {
    if (price < min) min = price;
    if (price - min > profit) profit = price - min;
  });

  return profit;
}

// const result = maxProfit([10, 15, 3, 4, 16, 21, 5, 2, 8]);
// const result = maxProfit([7, 1, 5, 3, 6, 4]);
const result = maxProfit([7, 6, 4, 3, 1]);
console.log(result);
