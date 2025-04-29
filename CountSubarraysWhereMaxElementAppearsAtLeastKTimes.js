/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const n = nums.length
    let max = Math.max(...nums)
    let left = 0;
    let right = 0;
    let count = 0;
    let answer = 0;
    for (; left < n; left++ ){
        if (left > 0 && nums[left-1] == max){
            count--
        }
        while (right < n && count < k){
            if (nums[right] == max){
                count++
            }
            right++
        }
        if (count >= k){
            answer += n - right + 1
        }
    }
    return answer
};
//https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/
