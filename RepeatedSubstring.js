// https://leetcode.com/problems/repeated-substring-pattern/description/

// brute force
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if (s.length < 2) return false
    let prefix = ""
    for (let i = 0; i < s.length / 2; i++ ){
        prefix += s[i];
        let working = prefix
        while (working.length < s.length){
            working = working + prefix
        }
        if (working == s){
            return true
        }

    }
    return false
};

//cheeky strings

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let universe = s + s
    let world = universe.slice(1,-1)
    return world.indexOf(s) != -1
};