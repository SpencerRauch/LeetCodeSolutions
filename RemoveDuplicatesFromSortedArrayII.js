/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let prev = nums[0];
    let count = 1;
    let swaps = 0
    const swapToEnd = function(arr, index, offset){
        while(index < arr.length -1 - offset){
            [arr[index], arr[index+1]] = [arr[index+1], arr[index]]
            index++
        }
    }
    for (let i=1;i<nums.length;i++){
        if (i > nums.length - 1- swaps) break;  //stops us from processing already swapped data
        if (nums[i] == prev){
            count++
        } else {
            prev = nums[i]
            count = 1;
        }
        if (count > 2){
            swapToEnd(nums, i, swaps)
            swaps++
            i-- 
        }
        
    }
    return nums.length - swaps
};
let num1 = [1,1,1,1,1,2,2,2,2,3]
console.log(removeDuplicates(num1))
console.log(num1)

// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii