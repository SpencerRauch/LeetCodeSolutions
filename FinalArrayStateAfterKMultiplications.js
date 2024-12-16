/**
 * https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    const simulate = (nums)=>{
        let mindex = 0;
        for (let i = 1; i < nums.length; i++){
            if (nums[i] < nums[mindex]){
                mindex = i;
            }
        }
        nums[mindex] = nums[mindex] * multiplier
    }
    for (let i = 0; i < k; i++){
        simulate(nums)
    }
    return nums
};