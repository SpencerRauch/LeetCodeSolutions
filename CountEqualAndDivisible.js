/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    const valid = (i,j) => {
        return nums[i] == nums[j] && (i * j) % k == 0
    }
    let count = 0;
    for (let i = 0; i < nums.length-1; i++){
        for (let j = i+1; j < nums.length; j++){
            if (valid(i,j)) count++
        }
    }
    return count
};

