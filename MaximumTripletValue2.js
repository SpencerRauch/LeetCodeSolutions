/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let maxI = 0;
    let maxDif = 0;
    let maxResult = 0;
    for (let k = 0; k < nums.length; k++){
        maxResult = Math.max(maxResult, maxDif * nums[k])
        maxDif = Math.max(maxDif, maxI - nums[k])
        maxI = Math.max(maxI, nums[k])
    }
    return maxResult
};