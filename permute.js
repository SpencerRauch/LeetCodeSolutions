/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, mutes=[],partial=[]) {
    if (nums.length == 0) mutes.push(partial)

    for (let i=0; i < nums.length; i++){
        let current = [...partial]
        current.push(nums[i])
        permute([...nums.slice(0,i),...nums.slice(i+1)], mutes, current)
    }
    return mutes
};