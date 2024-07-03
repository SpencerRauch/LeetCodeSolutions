//https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if (nums.length <= 4){
        return 0
    }
    let finalLength = nums.length - 3
    let finalDiff = Infinity
    nums.sort((a,b) => a-b)
    console.log(nums)
    for (let i = 0; i < 4; i++){
        finalDiff = Math.min(finalDiff, Math.abs(nums[finalLength-1+i] - nums[i]))
    }
    return finalDiff
};