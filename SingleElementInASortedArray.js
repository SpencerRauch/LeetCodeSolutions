/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] != nums[i+1]){ // if there's not two
            return nums[i] // return this val
        } else i++; // else skip the next one (ie move to the next unique number)
    }
};

// https://leetcode.com/problems/single-element-in-a-sorted-array/submissions/