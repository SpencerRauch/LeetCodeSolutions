https://leetcode.com/problems/sum-of-beauty-in-the-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function (nums) {
    let left = [nums[0]]
    let right = [];
    right[nums.length-1] = nums[nums.length-1]
    let totalBeauty = 0;
    
    for ( let i = 1; i < nums.length; i++){
        left[i] = Math.max(left[i-1], nums[i]);
    }
    for ( let i = nums.length-2; i >= 0; i-- ){
        right[i] = Math.min(right[i+1], nums[i]);
    }
    for ( let i = 1; i < nums.length-1; i++){
 
        if (nums[i] > left[i-1] && nums[i] < right[i+1]){
            totalBeauty += 2;
        } else if ( nums[i] > nums[i-1] && nums[i] < nums[i+1]){
            totalBeauty += 1;
        }
    }
    return totalBeauty

};