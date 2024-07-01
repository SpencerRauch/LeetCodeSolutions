// https://leetcode.com/problems/three-consecutive-odds/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count = 0;
    for (let elem of arr){
        if (elem % 2 == 1){
            count++
        } else{
            count = 0
        }
        if (count === 3) return true
    }
    return false
};