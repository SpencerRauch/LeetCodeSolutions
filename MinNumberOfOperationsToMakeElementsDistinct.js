/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const n = nums.length;
    const seen = new Set();
    let count = 0
    for (let i = n -1 ; i >= 0; i--){
        if (seen.has(nums[i])){
            break
        }
        seen.add(nums[i])
        count++
    }
    if (count == n) return 0
    return Math.ceil((n-count)/3)
};