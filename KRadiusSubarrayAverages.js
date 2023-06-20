//https://leetcode.com/problems/k-radius-subarray-averages/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    let averages = Array(nums.length).fill(-1)
    let rangeSize =  k * 2 + 1
    if (nums.length < rangeSize) return averages
    let i = k;
    let total = 0;
    for (let j = 0; j < rangeSize; j++){
        total += nums[j]
    }
    console.log(total)
    while (i + k < nums.length){
        averages[i] = parseInt(total / rangeSize);
        total -= nums[i-k]
        total += nums[i+k+1]
        i++
    }
    return averages
};
console.log(getAverages([7,4,3,9,1,8,5,2,6],3))
