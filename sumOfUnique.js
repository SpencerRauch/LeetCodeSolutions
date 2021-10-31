/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    debugger;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (i == 0) {
            if (!nums.slice(1).includes(nums[0])) {
                sum += nums[0]
            }
        } else if (i == nums.length - 1) {
            if (!nums.slice(0, i - 1).includes(val)) {
                sum += nums[i]
            }
        } else if (!(nums.slice(0, i).includes(val)) && !(nums.slice(i + 1).includes(val))) {
            sum += nums[i]
        }
    }
    return sum

};


/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique2 = function (nums) {
    let dict = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in dict) {
            dict[nums[i]] += 1;
        } else {
            dict[nums[i]] = 1;
        }
    }
    let sum = 0;
    for (key in dict) {
        if (dict[key] == 1) {
            sum = sum + Number(key);
        }
    }
    return sum;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique3 = function (nums) {
    nums.sort((a, b) => (a - b));
    sum = nums[0] == nums[1] ? 0 : nums[0];
    console.log(nums)
    for (let i = 1; i < nums.length; i++) {
        while (i < nums.length && nums[i] == nums[i + 1]) {
            i++;
        }
        if (nums[i - 1] != nums[i]) {
            sum += nums[i];
        }
    }
    return sum;
};


console.log(sumOfUnique3([1, 2, 3, 2]))

//https://leetcode.com/problems/sum-of-unique-elements