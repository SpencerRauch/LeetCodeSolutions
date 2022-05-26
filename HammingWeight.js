/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let weight = 0;
    let string = n.toString(2)
    for (let char of string){
        char == "1" && weight++
    }
    return weight
    
};

// https://leetcode.com/problems/number-of-1-bits/submissions/

