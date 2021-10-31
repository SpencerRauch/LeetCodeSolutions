/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var minSubsequence = function(nums) {
    nums.sort((a,b)=>(b-a));
    let sum = nums.reduce((a,b)=>(a+b));
    let returnArr = [];
    let subSum = 0;;
    for (let i=0; i<nums.length; i++){
        subSum += nums[i];
        if ( subSum > sum - subSum){
            for (let j = 0; j < i+1; j++){
                returnArr.push(nums[j]);
            }
            return returnArr;
        }
    }
    
};
https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/submissions/
