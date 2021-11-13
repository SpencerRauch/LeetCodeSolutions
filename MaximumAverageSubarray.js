/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {
    let sum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length-k+1; i++){
        let subSum = 0;
        for (let j = i; j < i+k; j++){
            subSum += nums[j];
        }
        sum = Math.max(sum,subSum)
    }
    return sum / k
    
};
console.log(findMaxAverage([1,5],1))

//https://leetcode.com/problems/maximum-average-subarray-i/