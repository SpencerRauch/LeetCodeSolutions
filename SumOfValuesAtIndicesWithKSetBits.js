//https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        let binStr = i.toString(2);
        let count = 0;
        for (let bit of binStr)
        {
            if (bit === "1"){
                count++
                if (count > k) break;
            }
        }
        if (count === k){
            sum += nums[i]
        }
    }
    return sum
};