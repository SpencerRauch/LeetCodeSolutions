/**
 * @param {number[]} nums
 * @return {number}
 */
//
//
var maxProduct = function(nums) {
    let max = nums[0]
    let prod = 1
    for (let i = 0; i <nums.length; i++){
            prod *= nums[i]
            max = Math.max(prod,max)
            prod = prod == 0 ? 1 : prod; // if we hit a zero, reset prod to 1 
            // Candidate subarrays will not contain 0 (barring cases like [-3,0])
        }

    //early attempts returned max here, and didn't work for some arrays where a larger number
    //could be found by multiplying negatives from the right (because of multiplying by negatives changing sign)
    //once I realized I could switch the signs of the running product by starting at the end, loop 2 to compare max to the alternate values:
    prod = 1;
    for (let i = nums.length-1; i >= 0; i-- ){
            prod *= nums[i]
            max = Math.max(prod,max)
            prod = prod == 0 ? 1 : prod;
    }
    
    return max;
};
// https://leetcode.com/problems/maximum-product-subarray/