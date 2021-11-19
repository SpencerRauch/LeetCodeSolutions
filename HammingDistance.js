/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    let hD = 0
    let diff = x ^ y; //XOR sets 1 in every position where x and y differ
    while (diff > 0){
        hD++  
        diff &= diff -1 // removes least significant bit set to 1
    }
    return hD;
    
    
};

// https://leetcode.com/problems/hamming-distance
