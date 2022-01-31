/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    if (nums.length == 1) return "" + nums[0]
    let sorted = nums.sort((a,b) => {
        return (""+b + a)-(""+a + b)  ;
    })
    let reduced = sorted.reduce((a,b) => (""+ a+ b)) 
    if (parseInt(reduced) == 0) return "0"
    return reduced
    
};

//https://leetcode.com/problems/largest-number/