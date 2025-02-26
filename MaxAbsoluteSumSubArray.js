/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let maxSoFar = nums[0]
    let maxEndingHere = nums[0]
    let minSoFar = nums[0]
    let minEndingHere = nums[0]
    for (let i = 1; i < nums.length; i++){
        maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i])
        minEndingHere = Math.min(minEndingHere + nums[i], nums[i])
        if (maxEndingHere > maxSoFar) maxSoFar = maxEndingHere
        if (minEndingHere < minSoFar) minSoFar = minEndingHere
    }
    return Math.max(maxSoFar, Math.abs(minSoFar))
};

//kadane's algorithm 
/* Kadane's Algorithm is a popular algorithm used to find the maximum sum of a contiguous subarray within a one-dimensional array of numbers. It's efficient with a time complexity of O(n), making it a go-to solution for this type of problem. Here's how it works:

Initialization:

Start with two variables: max_so_far and max_ending_here.

Set both variables to the first element of the array.

Iteration:

Iterate through the array starting from the second element.

For each element, update max_ending_here to be the maximum of the current element alone or the current element added to max_ending_here.

Update max_so_far to be the maximum of max_so_far and max_ending_here.

Result:

By the end of the iteration, max_so_far will hold the maximum sum of the contiguous subarray.
*/