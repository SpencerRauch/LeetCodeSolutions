/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {
    let counts = {0:-1} //store current count as key, index as value
    let count = 0
    let i = 0
    let maxLength = 0
    for (let num of nums){
        num == 0 ? count-- : count++;
        counts[count] !== undefined ? maxLength = Math.max(maxLength, i - counts[count]) : counts[count] = i;   
        i++
    }
    return maxLength;
};

// https://leetcode.com/problems/contiguous-array/