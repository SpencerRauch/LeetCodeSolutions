/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) { //narrow constraints made me go this way
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

var findNumbers = function(nums) { //works for any constraints
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        if (("" + nums[i]).length % 2 == 0){
            count++
        }
    }
    return count
};

//https://leetcode.com/problems/find-numbers-with-even-number-of-digits