/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var largestDivisibleSubset = function(nums) {
    let sortedNums = nums.sort((a,b) => a-b);
    
    let dp = Array(nums.length).fill(1);
    
    let max = 1;
    
    for(let i = 1; i < nums.length; i++){
        let current = nums[i];
        
        for(let j = 0; j < i; j ++){
            if(current % nums[j] === 0 && dp[j] + 1 > dp[i]){
                dp[i] = dp[j] + 1;
                if(dp[i] > max){
                    max = dp[i];
                }
            }
        }
    }
    
    let result = [];
    let prev = -1;
    for(let k = nums.length - 1; k >= 0; k--){
        if(max === dp[k]){
            if(prev === -1) prev = nums[k];
            if(prev % nums[k] === 0){
                result.push(nums[k]);
                prev = nums[k]
                max--
            }
        }
    }
    return result;
    
};