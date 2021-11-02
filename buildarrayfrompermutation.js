// https://leetcode.com/problems/build-array-from-permutation/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    let returnArr = []
    for (let i = 0; i < nums.length ; i++){
        returnArr.push(nums[nums[i]])
    }
    return returnArr;
};