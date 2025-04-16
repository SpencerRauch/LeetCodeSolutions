/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
    const n = nums.length
    let pairs = 0;
    let right = -1;
    const freq = new Map();
    let validSubs = 0;
    for (let left = 0; left < n; left++) {
        while (pairs < k && right + 1 < n) {
            right++;
            if (freq.has(nums[right])) {
                pairs += freq.get(nums[right])
                freq.set(nums[right], freq.get(nums[right]) + 1)
            } else {
                freq.set(nums[right], 1)
            }
        }
        if (pairs >= k) {
            validSubs += n - right;
        }
        freq.set(nums[left], freq.get(nums[left]) - 1)
        pairs -= freq.get(nums[left])
    }
    return validSubs
};

//https://leetcode.com/problems/count-the-number-of-good-subarrays