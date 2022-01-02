/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var minimumDifference = function(nums, k) {
    let sorted = nums.sort((a,b) => b-a);
    let i = 0;
    let j = k - 1;
    let minDiff = sorted[i] - sorted[j];
    i++
    j++
    while (j < nums.length){
        
        let currentDiff = sorted[i] - sorted[j];
        minDiff = Math.min(minDiff,currentDiff);
        i++
        j++
    }
    return minDiff;
};
https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/submissions/