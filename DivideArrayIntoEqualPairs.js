/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let counts = {}
    for (let i = 0; i < nums.length; i++){
        let val = nums[i]
        if (counts.hasOwnProperty(val)){
            counts[val]++
        } else {
            counts[val] = 1
        }
    }
    for (const value in counts){
        if (counts[value] % 2 !== 0) return false
    }
    return true
};