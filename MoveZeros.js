/**
 * https://leetcode.com/problems/move-zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let printer = 0;
    let reader = 0;
    let len = nums.length
    while(printer < len){
        if (reader < len && nums[reader] != 0){
            nums[printer] = nums[reader]
            printer++
            reader++
        }
        else if (reader < len-1){
            reader++
        } else {
            nums[printer] = 0
            printer++
        }
    }
};