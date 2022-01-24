/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let lowers = "abcdefghijklmnopqrstuvwxyz"
    let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let first_cap = false;
    if (uppers.includes(word[0])) {
        first_cap = true;
    }
    if (first_cap) {
        if (uppers.includes(word[1]){
            for (let i = 2; i < word.length; i++) {
                if (!uppers.includes(word[i])) return false;
            }
        }
        else {
            for (let i = 2; i < word.length; i++) {
                if (!lowers.includes(word[i])) return false;
            }
        }
    } else {
        for (let i = 1; i < word.length; i++){
            if (!lowers.includes(word[i])) return false
        }
    }
    return true;
};

// https://leetcode.com/problems/detect-capital