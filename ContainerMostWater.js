/**
 * https://leetcode.com/problems/container-with-most-water
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxArea = 0;
    while(left < right){
        const lower = Math.min(height[left], height[right])
        const length = right - left
        maxArea = Math.max(maxArea, lower*length)
        if (height[left] <= height[right]){
            left++
        } else {
            right--
        }
    }
    return maxArea
};