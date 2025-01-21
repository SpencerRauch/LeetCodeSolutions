/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    while(nums.length > 1){
        let temp = []
        for (let i = 1; i < nums.length; i++){
            temp.push((nums[i] + nums[i-1])%10)
        }
        nums = temp
    }
    return nums[0]
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    let end = nums.length-1;
    while(0 < end){
        for (let i = 0; i < end; i++){
            nums[i] = (nums[i] + nums[i+1])%10
        }
        end--
    }
    return nums[0]
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    const working = [...nums]
    let end = working.length-1;
    while(0 < end){
        for (let i = 0; i < end; i++){
            working[i] = (working[i] + working[i+1])%10
        }
        end--
    }
    return working[0]
};