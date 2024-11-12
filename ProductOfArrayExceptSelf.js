/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const len = nums.length;

    const before = new Array(len).fill(1);
    const after = new Array(len).fill(1);

    for (let i = 1; i < len; i++){
        before[i] = before[i - 1] * nums[i -1];
    }

    for (let i = len - 2; i >= 0; i--){
        after[i] = after[i + 1] * nums [i + 1];
    }

    const result = [];

    for (let i = 0; i < len; i++){
        result[i] = before[i] * after[i];
    }

    return result
};

//better use of memory, one fewer loops
var productExceptSelf = function(nums) {
    let out = new Array(nums.length).fill(1);   
    let curr = 1;
    for (let i = 0; i < nums.length; i++){
        out[i] *= curr;
        curr *= nums[i];
    }

    curr = 1;
    for (let i = nums.length-1; i >= 0; i--){
        out[i] *= curr;
        curr *= nums[i];
    }
    return out;
};

