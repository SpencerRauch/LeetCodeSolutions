/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let max = nums[0];
    let sum = nums[0]
    for (let i = 1; i <nums.length; i++){
        if (nums[i] > nums[i-1]){
            sum += nums[i]
        } else {
            sum = nums[i]
        }
        max = Math.max(max,sum)
    }
    return max
};