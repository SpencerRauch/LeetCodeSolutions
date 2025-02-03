/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    if (nums.length == 1) return 1
    let max = 1;
    let count = 1;
    for (let i = 1; i < nums.length; i++){
        if (nums[i-1] < nums[i]){
            count++
            max = Math.max(count, max)
        } else {
            count = 1
        }
    }
    count = 1
    for (let i = nums.length-2; i >= 0; i--){
        if (nums[i+1] < nums[i]){
            count++
            max = Math.max(count,max)
        } else {
            count = 1
        }
    }
    return max
};

//https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/