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

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance2 = function(x, y) {
    let hD = 0
    let diff = x ^ y; //XOR sets 1 in every position where x and y differ
    while (diff > 0){
        hD += diff % 2; // if last bit is 1, add 1, if it's 0, add 0!
        diff = diff >> 1; // shift off last bit
    }
    return hD;
      
};

// https://leetcode.com/problems/hamming-distance
