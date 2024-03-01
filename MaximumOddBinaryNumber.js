/**
 * @param {string} s
 * @return {string}
 * https://leetcode.com/problems/maximum-odd-binary-number/
 */
var maximumOddBinaryNumber = function(s) {
    let ones = s.length
    for (let char of s){
        if (char === "0"){
            ones--
        }
    }
    let returnStr = "";
    for (let i = 0; i < s.length-1; i++){
        if (ones > 1){
            returnStr += "1"
            ones--
        } else {
            returnStr += "0"
        }
    }
    return returnStr + "1"
};