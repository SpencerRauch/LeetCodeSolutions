//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++){
        for (let j = i+ 1; j < prices.length && prices[j] > prices[i]; j++){
            let dif = prices[j]-prices[i]
            maxProfit = (dif > maxProfit) ? dif : maxProfit;
        }
    }
    return maxProfit;
    
};

var maxProfit2 = (prices) => {
    let lowestBuy = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++){
        let thisPrice = prices[i];

        maxProfit = Math.max(maxProfit, thisPrice - lowestBuy);

        lowestBuy = Math.min(lowestBuy, thisPrice);
    }
    return maxProfit;

}