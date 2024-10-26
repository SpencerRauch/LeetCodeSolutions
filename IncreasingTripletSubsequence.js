/**
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let minSoFar = Number.MAX_VALUE;
    let secondMinSoFar = Number.MAX_VALUE;
    for (let num of nums){
        if (num <= minSoFar){
            minSoFar = num
        } else if (num <= secondMinSoFar){
            secondMinSoFar = num;
        } else return true
        
    }
    return false

};