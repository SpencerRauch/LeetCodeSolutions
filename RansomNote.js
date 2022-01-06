/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let magMap = {}
    for (let letter of magazine){
        if (magMap[letter]){
            magMap[letter] += 1;
        } else {
            magMap[letter] = 1;
        }
    }
    for (let letter of ransomNote){
        if (magMap[letter] > 0){
            magMap[letter] -= 1;
        } else {
            return false;
        }
    }
    return true;
};

// https://leetcode.com/problems/ransom-note