/**
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
    let low = 0;
    let sum = 0;
    for (let i=0; i<nums.length;i++){
        sum += nums[i];
        low = Math.min(low,sum);
    }
    if (low == 0){
        return 1;
    }
    else return 0 - low + 1
    
};
// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/