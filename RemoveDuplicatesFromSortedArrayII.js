/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let prev = nums[0];
    let count = 1;
    let swaps = 0
    const swapToEnd = function(arr, index){
        while(index < arr.length -1){
            [arr[index], arr[index+1]] = [arr[index+1], arr[index]]
            index++
        }
    }
    debugger;
    for (let i=1;i<nums.length;i++){
        if (nums[i] == prev){
            count++
        } else {
            prev = nums[i]
            count = 1;
        }
        if (count > 2){
            if (i > nums.length - 1- swaps) continue; //stops us from swapping already swapped data
            swaps++
            swapToEnd(nums, i)
            i--
            
        }
        
    }
    return nums.length - swaps
};
let num1 = [1,1,1,1,1,2,2,2,2,3]
console.log(removeDuplicates(num1))
console.log(num1)

// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii