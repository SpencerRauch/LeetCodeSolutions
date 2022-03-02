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