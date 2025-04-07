/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((a,b) => (a+b))
    if (sum % 2 != 0) return false
    let target = sum / 2
    const dp = new Array(target+1).fill(false)
    dp[0] = true
    for (let i = 0; i < nums.length; i++){
        let current = nums[i]
        for (let j = target; j>= current; j-- ){
            dp[j] = dp[j] || dp[j-current]
        }
    }
    return dp[target]
};