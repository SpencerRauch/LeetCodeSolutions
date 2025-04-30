/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    const isEven = (num) => {
        if (num < 10){
            return false
        }
        if (num <= 99){
            return true
        }
        if (num < 1000){
            return false
        }
        if (num <= 9999){
            return true
        }
        if (num < 100000){
            return false
        }
        return true
    }
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        if (isEven(nums[i])) count++
    }
    return count
};

//https://leetcode.com/problems/find-numbers-with-even-number-of-digits