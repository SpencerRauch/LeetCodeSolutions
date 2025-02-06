/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let ans = 0;
    const products = {}
    for (let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            let prod = nums[i] * nums[j]
            if (products.hasOwnProperty(prod)){
                products[prod] += 1
            } else {
                products[prod] = 1
            }
        }
    }
    for (let prod in products){
        ans += (products[prod] - 1) * products[prod] / 2 
    }
    return ans * 8
};