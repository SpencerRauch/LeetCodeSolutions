/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 * https://leetcode.com/problems/guess-number-higher-or-lower
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;
    let mid = Math.floor((right+left )/ 2)
    let res = guess(mid)
    while(res != 0){
        if (res == -1){
            right = mid -1
        }
        if (res == 1){
            left = mid +1
        }
        mid = Math.floor((right+left )/ 2)
        res = guess(mid)
    }
    return mid
};