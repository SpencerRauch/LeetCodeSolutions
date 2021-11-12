/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    let map = {}
    for (let i = 0; i < nums.length; i++){
        if (nums[i] in map && i - map[nums[i]] <= k) return true;
        map[nums[i]] = i;
    }
    return false;
    
};

//https://leetcode.com/problems/contains-duplicate-ii/submissions/