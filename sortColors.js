/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length - count; i++){
        if(nums[i]==1){
            nums.splice(i,1);
            nums.push(1);
            count++;
            i--;
        }
    }
    for (let i = 0; i < nums.length - count; i++){
        if(nums[i]==2){
            nums.splice(i,1);
            nums.push(2);
            count++;
            i--;
        }
    }
};
// https://leetcode.com/problems/sort-colors/