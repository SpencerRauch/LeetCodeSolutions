/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let maxLen = 0;
    let counts = new Array(n+1).fill(0)
    for (let i = 1; i < n+1; i++){
        if (i < 10){
            counts[i]++
            maxLen = Math.max(maxLen, counts[i])
        } else {
            let num = i;
            let sum = 0;
            while (num > 0){
                sum += num % 10
                num = Math.floor(num/10)
            }
            counts[sum]++
            maxLen = Math.max(maxLen, counts[sum])
        }
    }
    let res = 0;
    for (let i = 1; i < n+1; i++){
        if (counts[i] == maxLen) res++
    }
    return res
};

//https://leetcode.com/problems/count-largest-group/description/