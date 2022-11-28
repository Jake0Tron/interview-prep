/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * @param {number[]} prices 
 * @returns {number} max profit
 */

const maxProfit = (prices) => {
  // [7,1,5,3,6,4]
  // let max = 0;
  // // brute force - this is too slow
  // for (let buy=0; buy < prices.length-1; buy++){
  //   for (let sell = prices.length; sell > buy; sell--){
  //     let val = prices[sell] - prices[buy]
  //     max = val > max ? val : max;
  //   }
  // }

  // return max;

  let currentLowestBuyValue = prices[0];
  let max = 0;

  for (let i=0; i<prices.length; i++){
    // if our current Sale price is higher than our currentLowestBuyValue and the profit is higher than our max, set the difference as the max.
    if(prices[i] > currentLowestBuyValue && prices[i] - currentLowestBuyValue > max){
      max = prices[i] - currentLowestBuyValue
    }
    // if we find a lower buy value, let's set that and hope we can make a larger profit in coming days (can't sell in the past!)
    if (prices[i] < currentLowestBuyValue)
      currentLowestBuyValue = prices[i]
  }

  return max;

}