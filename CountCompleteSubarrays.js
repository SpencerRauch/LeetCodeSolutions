/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    const n = nums.length
    const set = new Set(nums)
    const minSize = set.size
    const countMap = new Map()
    let completeSubs = 0
    let left = 0;
    let right = 0;
    for (; left < n; left++){
        if (left > 0){
            const toRemove = nums[left-1]
            countMap.set(toRemove, countMap.get(toRemove)-1)
            if (countMap.get(toRemove) === 0) countMap.delete(toRemove)
        }
        while (right < n && countMap.size < minSize){
            const toProcess = nums[right]
            countMap.set(toProcess, (countMap.get(toProcess) || 0)+1)
            right++
        }
        if (countMap.size === minSize){
            completeSubs += n - right + 1;
        }
    }
    return completeSubs
};

//https://leetcode.com/problems/count-complete-subarrays-in-an-array