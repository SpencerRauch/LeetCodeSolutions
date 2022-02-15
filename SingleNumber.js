/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let table = {}
    for (let num of nums) {
        table[num] ? delete table[num] : table[num] = 'unmatched' // Does number exist as a key in table? If yes, delete it, if not, set it to 'unmatached'.
    }
    return Object.keys(table)[0] // Object.keys grabs all the keys of our table in an array (there should only be one, so we return the first key) (Add a parseInt() around this if key needs to be treated as integer)
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber2 = function(nums) {
    let lonelyNumber = 0
    for (let num of nums){
        lonelyNumber ^= num
    }
    return lonelyNumber
};

var singleNumber3 = function(nums) {
    return nums.reduce((a,b) => (a^b))
};

// https://leetcode.com/problems/single-number