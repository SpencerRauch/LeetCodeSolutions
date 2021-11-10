/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
    let possibleProfit = 0;
    for (let i = 1; i < prices.length; i++){
        if (prices[i] > prices[i-1]){
            possibleProfit += prices[i] - prices[i -1];
        }
    }
    return possibleProfit;
};

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/