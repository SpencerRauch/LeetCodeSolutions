/**
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const len = nums.length
    if (len == 1) return 0;
    let i = 0;
    let j = 0;
    let zeroes = 0;
    let max = 0;
    while (j < len){
        if (nums[j] == 0){
            zeroes++
        }
        if (zeroes == 1 || zeroes == 0){
            max = Math.max(max, j-i)
        } else if( zeroes > 1){
            if(nums[i] == 0){
                zeroes--
            }
            i++
        }
        j++
    }
    return max
};