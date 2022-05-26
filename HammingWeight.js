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

var hammingWeight2 = function(n) {

    return n.toString(2).split("").reduce((a,b)=>(+a + +b))
    
};

// https://leetcode.com/problems/number-of-1-bits/submissions/

