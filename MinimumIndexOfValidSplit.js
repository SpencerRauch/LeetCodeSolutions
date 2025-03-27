/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
    const freq = new Map();
    let dom = ""
    let max = 0
    for (let i = 0; i < nums.length; i++){
        if (freq.has(nums[i])){
            freq.set(nums[i],freq.get(nums[i])+1)
        } else {
            freq.set(nums[i],1)
        }
        if (freq.get(nums[i]) > max){
            max = freq.get(nums[i])
            dom = nums[i]
        }
    }
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == dom) count++
        if (count > (i+1)/2 && max - count > (nums.length - i - 1)/2){
            return i
        }
    }
    return -1
};