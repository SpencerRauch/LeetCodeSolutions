public class Solution {
    public int[] FinalPrices(int[] prices) 
    {
        for (int i = 0; i < prices.Length; i++)
        {
            int Val = prices[i];
            for (int j = i+1; j < prices.Length; j++)
            {
                if(prices[j] < Val)
                {
                    prices[i] -= prices[j];
                    break;
                }
            }
        }
        return prices;
    }
}