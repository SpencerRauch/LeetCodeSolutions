/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let set = [... new Set(nums)] // remove duplicates, any number XOR itself is 0, saved enough time to pass test cases
    let max = 0;
    for (let i=0; i < set.length; i++){
        for (let j = i+1; j < set.length; j++){
            max = Math.max(max, (set[i] ^ set[j]))
        }
    }
    return max
    
};

//https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/