/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    nums.sort((a,b) => (a-b))
    return nums[Math.floor(nums.length/2)]
    
}; 
//https://leetcode.com/problems/majority-element

//
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement2 = function(nums) {
    let count = 0;
    let candidate = undefined;
    
    for(let num of nums){
        if (count == 0){
            candidate = num
        }
        count += (num == candidate ? 1 : -1)
    }
    return candidate;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement3 = function(nums) {
    let map = {}
    let majority = Math.ceil(nums.length/2)
    for ( let num of nums){
        map[num] ? map[num]++ : map[num] = 1;
        if (map[num] >= majority){
            return num
        }
    }
};