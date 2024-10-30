/**
 * https://leetcode.com/problems/max-consecutive-ones-iii
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {

    const len = nums.length
    if (len == 0) return 0
    if (len <= k) return len
    let i = 0;
    let j = 0;
    let zeroes = 0;
    let max = 0;
    while(j < len){
        if (nums[j] == 0){
            zeroes++
        } 
        if (zeroes <= k){
            max = Math.max(max, j+1-i)
        } else {
            if(nums[i]==0){
                zeroes--
            }
            i++
        }
        j++
    }
    return max

};