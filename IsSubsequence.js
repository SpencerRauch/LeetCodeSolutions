/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    if (s.length >= t.length){
        return s == t;
    }
    if (s.length == 0) return true
    let sIndex = 0
    for ( let i = 0; i < t.length; i++){
        if (t[i] == s[sIndex]){
            sIndex++
            if (sIndex == s.length) return true
        }
    }
    return false;
    
};
//https://leetcode.com/problems/is-subsequence

//re-written in 2024 (didn't realize I had done it)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let subI = 0;
    let searchI = 0;
    while ( searchI < t.length){
        if(t[searchI] == s[subI]){
            subI++
            if (subI == s.length) return true
        }
        searchI++
    }
    return subI == s.length
};