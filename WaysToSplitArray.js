/**
 * @param {number[]} nums
 * @return {number}
 */
// sliding window
var waysToSplitArray = function(nums) {
    let left = nums[0];
    let right = 0;
    for (let i = 1; i < nums.length; i++){
        right += nums[i]
    }
    let count = left >= right ? 1 : 0;
    for (let i = 1; i < nums.length-1; i++){
        right -= nums[i]
        left += nums[i]
        if (left >= right) count++
    }
    return count
};