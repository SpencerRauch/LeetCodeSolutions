/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    console.log(min, max)
    max = max - min;
    if (max == 0) return min;
    let last = max;
    while (max > 0) {
        if (min > max) {
            let temp = min;
            min = max;
            max = temp;
        }

        max = max - min;
        if (max > 0) last = max;

    }
    return last;
};

console.log(findGCD([7,5,6,8,3]))
//follows Euclid's Algorigthm for finding GCD
//https://leetcode.com/problems/find-greatest-common-divisor-of-array/