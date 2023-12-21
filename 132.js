/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    // initialize m to -Infinity
    let m = -Infinity;
  
    // initialize a empty array stack
    const stack = [];
  
    // Run a Loop from last to first index of array nums
    for (let i = nums.length - 1; i >= 0; i--) {
  
      // If nums[i] is greater than the top element of stack, then pop the element from array stack
      while (nums[i] > stack[stack.length - 1]) {
        m = stack.pop();
      }
  
      // If m is greater than nums[i] then return true
      if (nums[i] < m) {
        return true
      }
  
      // Otherwise, push nums[i] into array stack
      stack.push(nums[i])
    }
  
    // If the above condition is not satisfied then return false.
    return false
  };