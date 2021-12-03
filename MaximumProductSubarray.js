/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0]
    let prod = 1
    for (let i = 0; i <nums.length; i++){
            prod *= nums[i]
            max = Math.max(prod,max)
            prod = prod == 0 ? 1 : prod;
        }
    prod = 1;
    for (let i = nums.length-1; i >= 0; i-- ){
            prod *= nums[i]
            max = Math.max(prod,max)
            prod = prod == 0 ? 1 : prod;
    }
        
    return max;
};
// https://leetcode.com/problems/maximum-product-subarray/