/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {

    let j = 0;
    for(let i = 0; i < s.length; i++){
        if(t[j] == s[i]){
            j++
        }
    }
    return t.length - j 
};


//https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/