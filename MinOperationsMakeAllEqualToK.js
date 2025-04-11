/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const seen = new Set();
    for (let i = 0; i < nums.length; i++){
        if (nums[i] < k) return -1
        if (nums[i] > k){
            seen.add(nums[i])
        }
        
    }
    return seen.size

};

// https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/